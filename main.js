var images = [
    { caption: "Coffegram", url: "https://i.pinimg.com/originals/81/c1/b0/81c1b0c771808c62edf3b9b8e5c95cdd.jpg" },
    { caption: "iGram", url: "https://secure.parksandresorts.wdpromedia.com/media/disneyparks/blog/wp-content/uploads/2013/05/hap830274SMALL.jpg" },
    { caption: "curlyGram", url: "https://disneynerd.files.wordpress.com/2015/02/enchantedtikihipster_final-01.jpg" }
];

var container = $('.image-list');

var currentImageIndex;

images.forEach(function(image, i) {
    var newImage = $('<img>');
    newImage.attr('src', image.url);

    var caption = $('<p>', { text: image.caption });

    var listItem = $('<li>');
    listItem.addClass('hipster-item');

    listItem.append(newImage);
    listItem.append(caption);

    var clickHandler = function(event) {
        currentImageIndex = i;
    };
    listItem.on('click', clickHandler);

    container.append(listItem);
});