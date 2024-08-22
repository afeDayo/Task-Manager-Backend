// A middleware in backend developement is like a middleman that sits between the incoming request from a clent and the final response from the server. its a founction that can modify the request, process it, handle certain tasks before passing it on to the next part ofthe code or sending back a response

const notFound = (req, res) => {
  res.json({ message: "Route not found" });
};

module.exports = notFound;
