"use strict";

$(function () {
  $(".draggable").draggable({
    revert: "invalid",
    helper: "clone",
    opacity: 0.7,
    zIndex: 1000,
    cursor: "grabbing",
    containment: "document"
  });

  $(".zone").droppable({
    accept: ".draggable",
    drop: function (event, ui) {
      const $zone = $(this);
      const $dragged = ui.draggable;
      const $origin = $dragged.parent();
      const $existing = $zone.children("img");

      if ($existing.length > 0) {
        $existing.appendTo($origin).animate({
          top: 0,
          left: 0
        }, 600);
      }

      $dragged.appendTo($zone).animate({
        top: 0,
        left: 0
      }, 600);
    }
  });

});

