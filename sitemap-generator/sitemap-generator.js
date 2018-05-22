var phantom = require('phantom');
var fs = require('fs');
var http = require('http');
var sitemap = require('sitemap');
var url = require('url');
var q = require('q');

function SitemapGenerator(rootUrl, options) 
{
    if (!rootUrl) 
    {
        console.log('Error: No root url provided');
        phantom.exit(-1); // -1: no input provided
    }

    var urlObject = url.parse(rootUrl);

    if (!urlObject.protocol || !urlObject.host)
    {
        console.log('Error: Url invalid');
        phantom.exit(-1); // -1: no input provided
    }

    // Hydrate the object
    this.path = urlObject.path;
    this.host = urlObject.hostname;
    this.root = rootUrl;
    this.port = urlObject.port;
    this.urls = {};
    this.urls[rootUrl] = true;
    this.keys = Object.keys(this.urls);
    this.pos = 0;

    // Hydrate the options
    this.sitemap = ( options && typeof(options.sitemap) !== undefined ) ? options.sitemap : 'sitemap.xml';
    this.userAgent = ( options && options.userAgent) || false;
    this.verbose = ( options && options.verbose ) ||| false;
}

SitemapGenerator.prototype.crawl = function() 
{
    var deferred = q.defer();

    if (this.pos < this.keys.length)
    {
        var url = this.keys[this.pos];
        

        deferred.notify({ url: url})
        this.checkUrl(url).then(function(type))
        {

        }
    }

    return deferred.promise;
}

SitemapGenerator.prototype.checkUrl = function(url) {

}