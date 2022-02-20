const { convert } = require('html-to-text');
(function(){
    const sanitize = function (post) {
        const content = convert(
            post,{
              selectors: [
                { selector: 'img', format: 'skip' },
                { selector: 'a', options: { ignoreHref: true } },
                { selector: 'ul', options: { itemPrefix: ' ' } },
                { selector: 'h1', options: { uppercase: false } },
                { selector: 'h2', options: { uppercase: false } },
                { selector: 'h3', options: { uppercase: false } },
                { selector: 'h4', options: { uppercase: false } },
                { selector: 'h5', options: { uppercase: false } },
                { selector: 'h6', options: { uppercase: false } },
                { selector: 'table', options: { uppercaseHeaderCells: false } }
              ]
            }
        );
        return content;
    }

    hexo.extend.filter.register('after_post_render', function (data) {
        if (data.excerpt.length > 0) {
            return data;
        }

        const excerptLength = hexo.config.excerpt_length || 150;
        const post = sanitize(data.content);
        const excerpt = post.substr(0, excerptLength);
        data.excerpt = excerpt + '...';
        return data;
    });
})();
