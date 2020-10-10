module.exports = {
    title: '瓦楞纸搭窝',
    description: 'Don\'t Settle!',
    port: 9090,
    dest: 'dist',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    head: [
        ["link", { rel: 'icon', href: '/logo.svg' }],
        ["meta", { name: 'viewport', content: "width=device-width,initial-scale=1,user-scalable=no" }],
    ],
    theme: 'reco',
    themeConfig: {
        logo: '/logo.svg',
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'about me', link: '/aboutme', icon: 'reco-account' },
            { text: 'GitHub', link: 'https://github.com/tomato-tomato', icon: 'reco-github' }
        ],
        blogConfig: {
            category: { location: 2, text: 'Category' },
            tag: { loaction: 3, text: 'Tag' }
        },
        type: "blog",
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        author: "lukeyan",
        authorAvatar: "/logo.svg",
        startYear: "2020",
        valineConfig: {
            appID: 'SaQhu6bMtiMJjXmG56af85JQ-gzGzoHsz',
            appKey: 'w7EOzhmq8QfQ1iA24w8LaYwU',
            showComment: false
        }
    },
    markdown: {
        lineNumbers: true
    }
}