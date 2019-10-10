let totalRequests = 0;

export default (req, res, next) => {
  totalRequests += 1;
  console.log(totalRequests);
  return next();
};
