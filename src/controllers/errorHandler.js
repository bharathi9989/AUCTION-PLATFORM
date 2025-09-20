export const errorHandler = (err, req, res, next) => {
  // console.stack(err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server Error",
  });
  next();
};
