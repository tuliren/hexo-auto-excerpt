const { convert } = require('html-to-text');
(function(){
    const sanitize = function (post) {
        const content = convert(
            post,{
              selectors: [
                { selector: 'img', format: 'skip' },
                { selector: 'a', options: { ignoreHref: true } },
                { selector: 'ul', options: { itemPrefix: '' } }
              ],
              wordwrap: 150,
              uppercaseHeadings: false
            }
        );
        return content;
    }

    hexo.extend.filter.register('after_post_render', function (data) {
        const excerptLength = hexo.config.excerpt_length || 300;
        const post = sanitize(data.content);
        const excerpt = post.substr(0, excerptLength);
        data.excerpt = excerpt;
        return data;
    });
})();
