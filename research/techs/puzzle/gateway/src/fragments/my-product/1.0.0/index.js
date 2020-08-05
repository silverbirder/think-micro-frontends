module.exports = {
  placeholder() {
    return "Loading products...";
  },
  content(req, data) {
    return {
      main: `<div class="product"><div>A Book</div><small>2.41 $</small></div>`,
    };
  },
};
