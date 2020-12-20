const sort = function(arrForSort) {
  return {
    sortForDetailPapge: function() {
      arrForSort.sort(function(a, b) {
        if (a.toLowerCase().indexOf("name") >= 0) {
          if (b.toLowerCase().indexOf("name") === 0) {
            return 1;
          } else {
            return -1;
          }
        }
        if (b.toLowerCase().indexOf("name") >= 0) {
          return 1;
        }
        return 0;
      });
    }
  };
};

export { sort };
