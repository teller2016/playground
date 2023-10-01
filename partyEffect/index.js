const indexObj = {
  initEvent: function () {
    party.resolvableShapes["particle0"] = `<i class="particle0"></i>`;
    party.resolvableShapes["particle1"] = `<i class="particle1"></i>`;

    $(".party").on("click", (event) => {
      party.sparkles(event.target, {
        count: party.variation.range(20, 20),
        speed: party.variation.range(100, 200),
        shapes: ["particle0", "particle1"],
        // spread: 1000,
        size: party.variation.range(1, 1),
        lifetime: party.variation.range(1, 1),
        rotation: () => new party.Vector(0, 0, 0),
      });
    });
  },
  run: function () {
    const self = this;
    self.initEvent();
  },
};

$(function () {
  indexObj.run();
});
