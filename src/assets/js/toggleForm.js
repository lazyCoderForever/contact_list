const toggleForm = function(form) {
  return {
    open: function(option) {
      switch (option) {
        case "full-screen":
          form.style.top = "0";
          form.style.left = "0";
          form.style.width = "100vw";
          form.style.height = "100vh";
          form.style.transform = "scale(1)";
          break;
        case "cover":
          form.style.top = "0";
          form.style.width = "100%";
          form.style.height = "100%";
          form.style.transform = "scale(1)";
          break;
        case "contain":
          form.style.top = "0";
          form.style.right = "0";
          form.style.width = "100%";
          form.style.height = "100%";
          form.style.transform = "scale(1)";
          break;
      }
    },
    close: function() {
      form.style.transform = "scale(0)";
      form.style.width = "0";
      form.style.height = "0";
    },
  };
};

export { toggleForm };
