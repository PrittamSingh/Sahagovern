import multer from "multer";

// Use memory storage to avoid saving files on disk
const storage = multer.memoryStorage();

// Accept only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Multer configuration
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB per file
    files: 5,                  // Maximum 5 files
  },
  fileFilter: fileFilter,
});

// For single image
export const uploadSingle = upload.single("image");

// For multiple images (max 5)
export const uploadMultiple = upload.array("images", 5);

export default upload;