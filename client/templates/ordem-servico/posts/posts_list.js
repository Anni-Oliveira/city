Template.postsList.onRendered(function () {
  this.find('.wrapper')._uihooks = {
    insertElement: function (node, next) {
      $(node)
        .hide()
        .insertBefore(next)
        .fadeIn();
    },
    moveElement: function (node, next) {
      var $node = $(node), $next = $(next);
      var oldTop = $node.offset().top;
      var height = $(node).outerHeight(true);
      
      // Encontre todos os elementos entre o próximo e o nó
      var $inBetween = $(next).nextUntil(node);
      if ($inBetween.length === 0)
        $inBetween = $(node).nextUntil(next);
      
      // Agora colocou o nó no lugar
      $(node).insertBefore(next);
      
      // Medir novo topo
      var newTop = $(node).offset().top;
      
      // Mover nó * de volta * para onde estava antes
      $(node)
        .removeClass('animate')
        .css('top', oldTop - newTop);
      
      // Pressione todos os outros elementos para baixo (ou para cima) para colocá-los de volta
      $inBetween
        .removeClass('animate')
        .css('top', oldTop < newTop ? height : -1 * height)
        
      
      // Forçar um redesenho
      $(node).offset();
      
      // Redefinir tudo para 0, animado
      $(node).addClass('animate').css('top', 0);
      $inBetween.addClass('animate').css('top', 0);
    },
    removeElement: function(node) {
      $(node).fadeOut(function() {
        $(this).remove();
      });
    }
  }
});