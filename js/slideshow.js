$(document).ready(function () {
  var links = [
    {
      name: 'Ogu',
      link: 'https://ogusers.com/Lyoni',
    },


    {
      name: 'Discord Account',
      link: 'https://discord.com/users/820061419294425099',
    },

    {
      name: 'Discord Server',
      link: 'https://discord.gg/bpa',
    },
    
    {
      name: 'Tiktok',
      link: 'https://tiktok.com/@hittemoff',
    },

    {
      name: 'Telegram',
      link: 'https://t.me/zitrene',
    },

    {
      name: 'Instagram',
      link: 'https://instagram.com/notlyoni',
    },

    {
      name: 'Snapchat',
      link: 'https://www.snapchat.com/add/notlyoni',
    },

  ];

  for (var i in links) {
    var link = links[i];

    $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }
});

$(function () {
  var $diaplay = $('#display');
  $('.marquee')
    .bind('beforeStarting', function () {
      $diaplay.show().html('started').delay(2000).fadeOut('fast');
    })
    .marquee({
      duration: 6000,
    });
});
