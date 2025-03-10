from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import trimesh

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

UPLOAD_FOLDER = os.path.join(os.getcwd(), "uploads")
CONVERTED_FOLDER = os.path.join(os.getcwd(), "converted")

os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs(CONVERTED_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER
app.config["CONVERTED_FOLDER"] = CONVERTED_FOLDER

ALLOWED_EXTENSIONS = {"stl", "obj"} 


def allowed_file(filename):
    """Check if file extension is allowed"""
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "CAD Viewer Backend Running!"})


@app.route("/upload", methods=["POST"])
def upload_file():
    """Handles file upload"""
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
        file.save(file_path)
        return jsonify(
            {
                "message": "File uploaded successfully!",
                "file_url": f"http://127.0.0.1:5000/files/{file.filename}",
            }
        ), 200

    return jsonify({"error": "Invalid file format. Only STL & OBJ allowed"}), 400


@app.route("/files/<filename>", methods=["GET"])
def get_file(filename):
    """Serve uploaded STL/OBJ files"""
    return send_from_directory(app.config["UPLOAD_FOLDER"], filename)


@app.route("/convert", methods=["POST"])
def convert_file():
    try:
        data = request.get_json()
        file_url = data.get("file_url")

        if not file_url:
            return jsonify({"error": "Missing file URL"}), 400

        filename = os.path.basename(file_url)
        input_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)

        if not os.path.exists(input_path):
            return jsonify({"error": f"File '{filename}' not found"}), 404

        file_extension = filename.rsplit(".", 1)[1].lower()
        if file_extension == "stl":
            output_filename = filename.rsplit(".", 1)[0] + ".obj"
            output_type = "obj"
        elif file_extension == "obj":
            output_filename = filename.rsplit(".", 1)[0] + ".stl"
            output_type = "stl"
        else:
            return jsonify({"error": "Invalid file format"}), 400

        output_path = os.path.join(app.config["CONVERTED_FOLDER"], output_filename)

        try:
            mesh = trimesh.load(input_path, force="mesh")

            if mesh is None or mesh.is_empty:
                return jsonify({"error": "Failed to load the 3D model"}), 500

            mesh.fix_normals()

            if output_type == "obj":
                mesh.export(output_path, file_type="obj", include_texture=True)
            else:
                mesh.export(output_path, file_type="stl", binary=True)

            return jsonify(
                {
                    "message": "Conversion successful!",
                    "converted_url": f"http://127.0.0.1:5000/converted/{output_filename}",
                }
            ), 200

        except Exception as e:
            return jsonify({"error": f"Conversion failed: {str(e)}"}), 500

    except Exception as e:
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500



@app.route("/converted/<filename>", methods=["GET"])
def download_converted(filename):
    """Serve the converted file"""
    return send_from_directory(
        app.config["CONVERTED_FOLDER"], filename, as_attachment=True
    )


if __name__ == "__main__":
    app.run(debug=True)


