webpackJsonp(["others.module"],{

/***/ "../../../../../src/app/views/about/app-about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"about\" [innerHTML]=\"about.about_content\" *ngIf=\"about\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/about/app-about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/about/app-about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppAboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_about_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/about.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppAboutComponent = (function () {
    function AppAboutComponent(aboutService) {
        this.aboutService = aboutService;
    }
    AppAboutComponent.prototype.ngOnInit = function () {
        this.loadAbout();
    };
    AppAboutComponent.prototype.loadAbout = function () {
        var _this = this;
        this.aboutService.get().subscribe(function (data) {
            _this.about = data;
        });
    };
    AppAboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/views/about/app-about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/about/app-about.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_admin_about_service__["a" /* AboutService */]])
    ], AppAboutComponent);
    return AppAboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/artist/app-artist.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"60\" fxFlex.gt-sm=\"50\" *ngIf=\"artist\">\r\n    <img mat-card-image [src]=\"artist.artist_avatar || '/assets/images/avatar.png'\" alt=\"\" class=\"artist_avatar\">\r\n  </div>\r\n\r\n  <!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"40\" *ngIf=\"artist\">\r\n    <!-- <app-songitem *ngFor=\"let song of artist.songs\" [songItem]=\"song\"></app-songitem> -->\r\n    <!-- <iframe src=\"https://open.spotify.com/embed?uri=spotify%3Aartist%3A2p5zh0v6BIDwVSY3Q6pgwn\" width=\"300\" height=\"380\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe> -->\r\n    <div [innerHTML]=\"spotify_embed\"></div>\r\n  </div>\r\n\r\n  <div fxFlex=\"100\"  *ngIf=\"artist\">\r\n    <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\"propic\">\r\n\r\n        <!-- <img mat-card-image [src]=\"artist.artist_avatar || '/assets/images/avatar.png'\" alt=\"\" class=\"artist_avatar\"> -->\r\n      </div>\r\n      <div class=\"profile-title mb-1\">\r\n        <div class=\"main-title\">{{artist.artist_name}}</div>\r\n        <div class=\"text-muted\">{{artist.artist_bio}}</div>\r\n      </div>\r\n\r\n      <!-- <div class=\"general-info-from\" *ngIf=\"artist.artist_from\">\r\n        <h4>FROM</h4>\r\n        <p>{{artist.artist_from}}</p>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"general-info-members\">\r\n        <h4>MEMBERS</h4>\r\n        <p><span *ngFor=\"let member of artist.artist_members\" class=\"member-name\">{{member.name}}</span></p>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"artist-links\">\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_contact\">\r\n         \r\n          <a mat-mini-fab color=\"warn\" href=\"mailto:{{artist.artist_contact}}\">\r\n            <mat-icon>email</mat-icon>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_website_url\">\r\n          \r\n          <a mat-mini-fab color=\"warn\" href=\"{{artist.artist_website_url}}\">\r\n            <mat-icon>link</mat-icon>\r\n          </a>\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_twitter\">\r\n         \r\n          <img src=\"./assets/images/twitter-icon.png\" (click)=\"gotoLink(artist.artist_twitter)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_facebook\">\r\n         \r\n          <img src=\"./assets/images/facebook-icon.png\" (click)=\"gotoLink(artist.artist_facebook)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_myspace\">\r\n       \r\n          <img src=\"./assets/images/myspace-icon.png\" (click)=\"gotoLink(artist.artist_myspace)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_youtube\">\r\n          <img src=\"./assets/images/youtube-icon.png\" (click)=\"gotoLink(artist.artist_youtube)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_itunes\">\r\n          <img src=\"./assets/images/itunes-icon.png\" (click)=\"gotoLink(artist.artist_itunes)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_lastfm\">\r\n          <img src=\"./assets/images/lastfm-icon.png\" (click)=\"gotoLink(artist.artist_lastfm)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_soundcloud\">\r\n          <img src=\"./assets/images/soundcloud-icon.png\" (click)=\"gotoLink(artist.artist_soundcloud)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_bandcamp\">\r\n          <img src=\"./assets/images/basecamp-icon.png\" (click)=\"gotoLink(artist.artist_bandcamp)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_instagram\">\r\n          <h4>Instagram</h4>\r\n          <p>{{artist.artist_instagram}}</p>\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_spotify\">\r\n          <img src=\"./assets/images/sportify-icon.png\" (click)=\"gotoLink(artist.artist_spotify)\" alt=\"\">\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_otherurl1\">\r\n          <h4>Other 1</h4>\r\n          <p>{{artist.artist_otherurl1}}</p>\r\n        </div>\r\n\r\n        <div class=\"general-info-contact\" *ngIf=\"artist.artist_otherurl2\">\r\n          <h4>Other 2</h4>\r\n          <p>{{artist.artist_otherurl2}}</p>\r\n        </div>\r\n\r\n      </div> -->\r\n\r\n      <!-- <div class=\"general-info-contact\" *ngIf=\"artist.artist_vocal\">\r\n        <h4>Vocal</h4>\r\n        <p>{{artist.artist_vocal}}</p>\r\n        <img src=\"./assets/images/vocal-icon.png\" (click)=\"gotoLink(artist.artist_vocal)\" alt=\"\">\r\n      </div> -->\r\n<!-- \r\n      <div class=\"general-info-contact\" *ngIf=\"artist.artist_genre\">\r\n        <h4>Genre</h4>\r\n        <p>{{artist.artist_genre}}</p>\r\n      </div> -->\r\n\r\n      <!-- <div class=\"profile-actions mb-1\">\r\n        <a\r\n          [href]=\"'mailto:noreply@synchaudio.com?subject=Share Artist ' + artist.artist_name + '&body=' + artistsharelink\">\r\n          <button mat-raised-button color=\"primary\">Share <mat-icon>share</mat-icon></button>\r\n        </a>\r\n      </div> -->\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/artist/app-artist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".member-name {\n  margin: 0 5px; }\n\n.artist_avatar {\n  width: 100%;\n  margin-top: 10px !important;\n  border-radius: 5px !important; }\n\n.artist-links {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.artist-links .general-info-contact {\n    margin-bottom: 10px; }\n\n.artist-links .general-info-contact img {\n      cursor: pointer;\n      width: 40px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/artist/app-artist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppArtistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_artists_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/artists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppArtistComponent = (function () {
    function AppArtistComponent(activedRoute, artististService, sanitizer) {
        this.activedRoute = activedRoute;
        this.artististService = artististService;
        this.sanitizer = sanitizer;
    }
    AppArtistComponent.prototype.ngOnInit = function () {
        this.artist_id = this.activedRoute.snapshot.params['artist_id'];
        this.loadArtist();
    };
    AppArtistComponent.prototype.loadArtist = function () {
        var _this = this;
        this.artististService.getArtist(this.artist_id).subscribe(function (artist) {
            _this.artist = artist;
            _this.artistsharelink = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].siteURL + 'page/playlist/' + _this.artist.artist_id;
            // console.log(artist.artist_spotify_embed)
            _this.spotify_embed = _this.sanitizer.bypassSecurityTrustHtml(artist['artist_spotify_embed']);
        });
    };
    AppArtistComponent.prototype.gotoLink = function (url) {
        window.open(url, "_blank");
    };
    AppArtistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-artist',
            template: __webpack_require__("../../../../../src/app/views/artist/app-artist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/artist/app-artist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_artists_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], AppArtistComponent);
    return AppArtistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/catalog/app-catalog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-333\">\r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"25\" *ngFor=\"let artist of artists\">\r\n      <mat-card class=\"p-0\"  (click)=\"gotoartistpage(artist.artist_id)\">\r\n        <div [ngStyle]=\"{background: 'url(' + (artist.artist_avatar || '/assets/images/avatar.png') + ')'}\" class=\"artist-thumb\"></div>\r\n        <mat-card-content>\r\n          <h4 class=\"text-center artist-title\">{{artist.artist_name}}</h4>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/catalog/app-catalog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  cursor: pointer; }\n\nmat-card:hover {\n  background: #eee; }\n\n.artist-thumb {\n  height: 200px;\n  width: 100%;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n\n.artist-title {\n  padding-top: 10px;\n  font-size: 17px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/catalog/app-catalog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCatalogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_artists_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/artists.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppCatalogComponent = (function () {
    function AppCatalogComponent(artististService, router) {
        this.artististService = artististService;
        this.router = router;
    }
    AppCatalogComponent.prototype.ngOnInit = function () {
        this.getAllArtist();
    };
    AppCatalogComponent.prototype.getAllArtist = function () {
        var _this = this;
        this.artististService.getAll().subscribe(function (data) {
            _this.artists = data;
        });
    };
    AppCatalogComponent.prototype.gotoartistpage = function (artist_id) {
        this.router.navigate(['/page/artist/' + artist_id]);
    };
    AppCatalogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-catalog',
            template: __webpack_require__("../../../../../src/app/views/catalog/app-catalog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/catalog/app-catalog.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_admin_artists_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], AppCatalogComponent);
    return AppCatalogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/contact/app-contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\r\n    <h3>SUBMITTION REQUIREMENT</h3>\r\n    <h4>Before submitting your music, please review the following guidelines:</h4>\r\n\r\n    <ul>\r\n        <li>we only accept streaming links</li>\r\n        <li>Please provide all songwriters and publishers information </li>\r\n    </ul>\r\n\r\n    <p>For Music submissions, send us your streaming (soundcloud, Spotify or MP3) & contact number (please indicate the best time to reach you) | <a href=\"mailto:Demo@synchaudio.com\" class=\"mailto\">Demo@synchaudio.com</a></p>\r\n\r\n    <hr>\r\n\r\n    <div class=\"contact-form\">\r\n        <h4>Alternatively, please use the following form to contact us.</h4>\r\n        <div class=\"contact-form-container\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Name\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Email\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Reason\">\r\n                    <mat-option value=\"general\">General Questions</mat-option>\r\n                    <mat-option value=\"licensing\">Licensing</mat-option>\r\n                    <mat-option value=\"sampling\">Sampling our songs</mat-option>\r\n                    <mat-option value=\"writers\">Writers & Producers</mat-option>\r\n                    <mat-option value=\"artist_management\">Artist Management</mat-option>\r\n                    <mat-option value=\"sample_clearance\">Sample Clearance</mat-option>\r\n                    <mat-option value=\"advertising\">Advertising</mat-option>\r\n                    <mat-option value=\"artist_request\">Artist Requests</mat-option>\r\n                    <mat-option value=\"synchstage\">SynchStage</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            \r\n            <mat-form-field>\r\n                <textarea matInput placeholder=\"Message\"></textarea>\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"primary\">Send</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/contact/app-contact.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mailto {\n  color: red;\n  font-weight: bold; }\n\n.contact-form .contact-form-container {\n  width: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/contact/app-contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppContactComponent = (function () {
    function AppContactComponent() {
    }
    AppContactComponent.prototype.ngOnInit = function () { };
    AppContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/views/contact/app-contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/contact/app-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppContactComponent);
    return AppContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"home-page m-333\">\r\n  <slideshow \r\n    [imageUrls]=\"sliders\" \r\n    height=\"600px\"\r\n    [autoPlay]=\"true\"></slideshow>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\" *ngIf=\"featuredData\">\r\n      <div fxFlex=\"100\" fxFlex.gt-xs=\"40\">\r\n          <mat-card class=\"p-0\" >\r\n            <mat-card-content class=\"featured-songs\">\r\n              <h3>Featured Playlist</h3>\r\n              <app-songitem *ngFor=\"let song of featuredData.recently_added_songs\" [songItem]='song'></app-songitem>\r\n            </mat-card-content>\r\n          </mat-card>\r\n      </div>\r\n\r\n      <div fxFlex=\"100\" fxFlex.gt-xs=\"60\">\r\n        <mat-card class=\"p-0\" >\r\n          <mat-card-content class=\"featured-artists\">\r\n            <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n\r\n              <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"33\" *ngFor=\"let playlist of featuredData.featured_playlists\">\r\n                <h4 class=\"featured-title\">Featured Playlist</h4>\r\n                <mat-card class=\"p-0\"  (click)=\"gotoPlaylistPage(playlist.playlist_id)\">\r\n                  <div [ngStyle]=\"{background: 'url(' + (playlist?.playlist_thumb || '/assets/images/avatar.png') + ')'}\" class=\"artist-thumb\">\r\n                    <span class=\"featured-item-title\">{{playlist.playlist_title}}</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div> -->\r\n\r\n              <!-- <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" *ngFor=\"let song of featuredData.featured_songs\">\r\n                  <h4 class=\"featured-title\">Featured Song</h4>\r\n                  <mat-card class=\"p-0\"  (click)=\"gotoSongPage(song)\">\r\n                    <div [ngStyle]=\"{background: 'url(' + (song?.song_thumb || '/assets/images/music_icon.png') + ')'}\" class=\"artist-thumb\">\r\n                      <span class=\"featured-item-title\">{{song.song_title}}</span>\r\n                    </div>\r\n                  </mat-card>\r\n                </div> -->\r\n\r\n              <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" *ngFor=\"let artist of featuredData.featured_artists\">\r\n                <h4 class=\"featured-title\">Featured Artist</h4>\r\n                <mat-card class=\"p-0\"  (click)=\"gotoartistpage(artist.artist_id)\">\r\n                  <div [ngStyle]=\"{background: 'url(' + (artist?.artist_avatar || '/assets/images/avatar.png') + ')'}\" class=\"artist-thumb\">\r\n                    <span class=\"featured-item-title\">{{artist.artist_name}}</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n\r\n              <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" *ngFor=\"let video of featuredData.featured_videos\">\r\n                <h4 class=\"featured-title\">Featured Video</h4>\r\n                <mat-card class=\"p-0\"  (click)=\"gotovideo(video.video_link)\">\r\n                  <div [ngStyle]=\"{background: 'url(' + (video?.video_thumb || '/assets/images/avatar.png') + ')'}\" class=\"artist-thumb\">\r\n                    <span class=\"featured-item-title\">Featured Video</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n\r\n              <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" *ngFor=\"let placementItem of featuredData.featured_placement\">\r\n                <h4 class=\"featured-title\">Featured Placement</h4>\r\n                <mat-card class=\"p-0\"  (click)=\"gotoPlacement(placementItem.placement_id)\">\r\n                  <div [ngStyle]=\"{background: 'url(' + (placementItem?.placement_poster || '/assets/images/avatar.png') + ')'}\" class=\"artist-thumb\">\r\n                    <span class=\"featured-item-title\">{{placementItem.placement_title}}</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n\r\n              <div fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                <h4 class=\"featured-title\">Music Reviews</h4>\r\n                <mat-card class=\"p-0\"  (click)=\"gotomusicReview()\">\r\n                  <div [ngStyle]=\"{background: 'url('+featuredData.music_review.musicreview_thumb+')'}\" class=\"artist-thumb\">\r\n                    <span class=\"featured-item-title\">Music Reviews</span>\r\n                  </div>\r\n                </mat-card>\r\n              </div>\r\n\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".home-page .featured-songs, .home-page .featured-artists, .home-page .featured-news {\n  margin-top: 10px; }\n\n.home-page .artist-thumb {\n  height: 200px;\n  width: 100%;\n  background-size: cover !important;\n  background-repeat: no-repeat !important;\n  cursor: pointer;\n  position: relative; }\n\n.home-page .artist-thumb .featured-item-title {\n    position: absolute;\n    bottom: 20px;\n    left: 20px;\n    color: #df1859;\n    text-transform: uppercase; }\n\n.video_thumb {\n  width: 30%;\n  margin: 0 1%;\n  cursor: pointer; }\n\n.featured-title {\n  font-size: 15px;\n  color: #df1859;\n  text-transform: uppercase; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_featured_service__ = __webpack_require__("../../../../../src/app/shared/services/featured.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_player_service__ = __webpack_require__("../../../../../src/app/shared/services/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppHomeComponent = (function () {
    function AppHomeComponent(featuredService, router, dashboardService, playerService) {
        this.featuredService = featuredService;
        this.router = router;
        this.dashboardService = dashboardService;
        this.playerService = playerService;
    }
    AppHomeComponent.prototype.ngOnInit = function () {
        this.loadFeaturedData();
        this.loadSliders();
    };
    AppHomeComponent.prototype.loadFeaturedData = function () {
        var _this = this;
        this.featuredService.getAll().subscribe(function (data) {
            _this.featuredData = data;
            _this.featuredData.featured_videos.map(function (video) {
                var video_id = video.video_link.replace('https://www.youtube.com/watch?v=', '');
                video.video_thumb = 'https://img.youtube.com/vi/' + video_id + '/0.jpg';
            });
        });
    };
    AppHomeComponent.prototype.loadSliders = function () {
        var _this = this;
        this.dashboardService.getSlidersHome().subscribe(function (data) {
            _this.sliders = data;
        });
    };
    AppHomeComponent.prototype.gotoartistpage = function (artist_id) {
        this.router.navigate(['/page/artist/' + artist_id]);
    };
    AppHomeComponent.prototype.gotonews = function (news_id) {
        this.router.navigate(['/page/newsdetail/' + news_id]);
    };
    AppHomeComponent.prototype.gotovideo = function (video_link) {
        window.open(video_link);
    };
    AppHomeComponent.prototype.gotomusicReview = function () {
        this.router.navigate(['/page/musicreviews']);
    };
    AppHomeComponent.prototype.gotoPlaylistPage = function (playlist_id) {
        this.router.navigate(['/page/playlist/' + playlist_id]);
    };
    AppHomeComponent.prototype.gotoSongPage = function (song) {
        var me = this;
        this.playerService.currentSong = null;
        setTimeout(function () {
            me.playerService.currentSong = song;
        }, 100);
    };
    AppHomeComponent.prototype.gotoPlacement = function (placement_id) {
        // this.router.navigate(['/page/playlist/' + playlist_id]);
        this.router.navigate(['/page/placement_detail/' + placement_id]);
    };
    AppHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/views/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_featured_service__["a" /* FeaturedService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_player_service__["a" /* PlayerService */]])
    ], AppHomeComponent);
    return AppHomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/licenserequest/licenserequest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"license-request\">\r\n  <form [formGroup]=\"itemForm\" (ngSubmit)=\"submit()\">\r\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n      <div fxFlex=\"50\"  class=\"pr-1\">\r\n        <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"wrap\">\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_name\"\r\n                [formControl]=\"itemForm.controls['license_name']\"\r\n                placeholder=\"Name\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_email\"\r\n                [formControl]=\"itemForm.controls['license_email']\"\r\n                placeholder=\"Email\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_phone\"\r\n                [formControl]=\"itemForm.controls['license_phone']\"\r\n                placeholder=\"Phone\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_company\"\r\n                [formControl]=\"itemForm.controls['license_company']\"\r\n                placeholder=\"Company\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_position\"\r\n                [formControl]=\"itemForm.controls['license_position']\"\r\n                placeholder=\"Position\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_production_name\"\r\n                [formControl]=\"itemForm.controls['license_production_name']\"\r\n                placeholder=\"Production Name\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_production_budget\"\r\n                [formControl]=\"itemForm.controls['license_production_budget']\"\r\n                placeholder=\"Production Budget\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_music_budget\"\r\n                [formControl]=\"itemForm.controls['license_music_budget']\"\r\n                placeholder=\"Music Budget\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex='100'>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput [matDatepicker]=\"picker\" placeholder=\"Release Date\" [formControl]=\"itemForm.controls['license_release_date']\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex=\"100\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>License Type</mat-label>\r\n              <mat-select [formControl]=\"itemForm.controls['license_type']\">\r\n                <mat-option *ngFor=\"let type of licenseTypes\" [value]=\"type\">\r\n                  {{type}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex=\"100\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>Term</mat-label>\r\n              <mat-select [formControl]=\"itemForm.controls['license_term']\">\r\n                <mat-option *ngFor=\"let term of terms\" [value]=\"term\">\r\n                  {{term}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxFlex=\"100\"  class=\"pr-1\">\r\n            <mat-form-field class=\"full-width\">\r\n              <input\r\n                matInput\r\n                name=\"license_territory\"\r\n                [formControl]=\"itemForm.controls['license_territory']\"\r\n                placeholder=\"Territory\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex=\"100\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>Music Length</mat-label>\r\n              <mat-select [formControl]=\"itemForm.controls['license_music_length']\">\r\n                <mat-option *ngFor=\"let length of musicLengths\" [value]=\"length\">\r\n                  {{length}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex=\"100\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>Used In Credits?</mat-label>\r\n              <mat-select [formControl]=\"itemForm.controls['license_used_in_credits']\">\r\n                <mat-option value=\"Yes\">Yes</mat-option>\r\n                <mat-option value=\"Yes\">No</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex=\"100\">\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-label>Theme Song?</mat-label>\r\n              <mat-select [formControl]=\"itemForm.controls['license_theme_song']\">\r\n                <mat-option value=\"Yes\">Yes</mat-option>\r\n                <mat-option value=\"Yes\">No</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex=\"100\">\r\n            <mat-form-field class=\"full-width\">\r\n              <textarea matInput placeholder=\"Context Of Usage\" [formControl]=\"itemForm.controls['license_context_of_usage']\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"pr-1\" fxFlex=\"100\">\r\n            <mat-form-field class=\"full-width\">\r\n              <textarea matInput placeholder=\"Comments\" [formControl]=\"itemForm.controls['license_comments']\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <button \r\n            mat-raised-button \r\n            color=\"primary\" \r\n            [disabled]=\"itemForm.invalid\">Request</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/licenserequest/licenserequest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/licenserequest/licenserequest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLicenseRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_admin_songs_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/songs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppLicenseRequestComponent = (function () {
    function AppLicenseRequestComponent(fb, activedRoute, songService, snack) {
        this.fb = fb;
        this.activedRoute = activedRoute;
        this.songService = songService;
        this.snack = snack;
        this.licenseTypes = [
            'Audio Project',
            'Corperate Presentation',
            'Corporate Media',
            'Feature Film',
            'Festival Usage',
            'Independent Film',
            'Live Event',
            'Music Compilation',
            'Non Commercial',
            'Podcast',
            'Public Space',
            'Radio Advertising',
            'Radio Production',
            'Sample/Remix/Covers/Derivative Works',
            'Software',
            'Student Film',
            'TV Advertising',
            'TV Show',
            'Video Game',
            'Video Project',
            'Telephone/Music On Hold',
            'Web Video Clip/Webisode',
            'Website',
            'Other License'
        ];
        this.terms = [
            '3 Months',
            '6 Months',
            '1 Year',
            '5 Years',
            'Unlimited'
        ];
        this.musicLengths = [
            '15 Seconds',
            '30 Seconds',
            '60 Seconds',
            'Entire Song'
        ];
    }
    AppLicenseRequestComponent.prototype.ngOnInit = function () {
        this.song_id = this.activedRoute.snapshot.params['song_id'];
        this.buildItemForm();
    };
    AppLicenseRequestComponent.prototype.buildItemForm = function () {
        this.itemForm = this.fb.group({
            license_song_id: [this.song_id],
            license_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            license_email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email]],
            license_phone: ['', [__WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].phone('BD')]],
            license_company: [''],
            license_position: [''],
            license_production_name: [''],
            license_production_budget: [''],
            license_music_budget: [''],
            license_release_date: [],
            license_type: ['Audio Project'],
            license_term: ['3 Months'],
            license_territory: [''],
            license_music_length: ['15 Seconds'],
            license_used_in_credits: ['Yes'],
            license_theme_song: ['Yes'],
            license_context_of_usage: [''],
            license_comments: ['']
        });
    };
    AppLicenseRequestComponent.prototype.submit = function () {
        var _this = this;
        this.songService.licenseRequest(this.itemForm.value).subscribe(function (data) {
            _this.snack.open('Request Sent Successfully!', 'OK', { duration: 5000 });
            _this.itemForm.reset();
        });
    };
    AppLicenseRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-licenserequest',
            template: __webpack_require__("../../../../../src/app/views/licenserequest/licenserequest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/licenserequest/licenserequest.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_admin_songs_service__["a" /* SongsService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSnackBar */]])
    ], AppLicenseRequestComponent);
    return AppLicenseRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/musicreview/musicreview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/musicreview/musicreview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-333\">\r\n  <div [innerHTML]=\"content\" class=\"text-center\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/musicreview/musicreview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMusicReviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_dashboard_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppMusicReviewComponent = (function () {
    function AppMusicReviewComponent(dashboardService) {
        this.dashboardService = dashboardService;
    }
    AppMusicReviewComponent.prototype.ngOnInit = function () {
        this.loadMusicReview();
    };
    AppMusicReviewComponent.prototype.loadMusicReview = function () {
        var _this = this;
        this.dashboardService.getMusicReview().subscribe(function (data) {
            _this.content = data.musicreview_content;
        });
    };
    AppMusicReviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-musicreview',
            template: __webpack_require__("../../../../../src/app/views/musicreview/musicreview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/musicreview/musicreview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_admin_dashboard_service__["a" /* DashboardService */]])
    ], AppMusicReviewComponent);
    return AppMusicReviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/news/app-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/news/app-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"m-333\">\r\n      <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n        <app-newsitem *ngFor=\"let newsItem of news\" [newsItem]=\"newsItem\" fxFlex=\"100\" fxFlex.gt-xs=\"33\"></app-newsitem>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/news/app-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_admin_news_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppNewsComponent = (function () {
    function AppNewsComponent(newsService) {
        this.newsService = newsService;
    }
    AppNewsComponent.prototype.ngOnInit = function () {
        this.loadNews();
    };
    AppNewsComponent.prototype.loadNews = function () {
        var _this = this;
        this.newsService.getPublished().subscribe(function (news) {
            _this.news = news;
        });
    };
    AppNewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__("../../../../../src/app/views/news/app-news.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/news/app-news.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_admin_news_service__["a" /* NewsService */]])
    ], AppNewsComponent);
    return AppNewsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/newsdetail/app-newsdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"newsItem\">\r\n  <h2>{{newsItem.news_title}}</h2>\r\n  <div [innerHTML]=\"newsItem.news_content\"> </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/newsdetail/app-newsdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/newsdetail/app-newsdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNewsDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_news_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppNewsDetailComponent = (function () {
    function AppNewsDetailComponent(activedRoute, newsService) {
        this.activedRoute = activedRoute;
        this.newsService = newsService;
    }
    AppNewsDetailComponent.prototype.ngOnInit = function () {
        this.news_id = this.activedRoute.snapshot.params['news_id'];
        this.loadNewsDetail();
    };
    AppNewsDetailComponent.prototype.loadNewsDetail = function () {
        var _this = this;
        this.newsService.getItem(this.news_id).subscribe(function (newsItem) {
            _this.newsItem = newsItem;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppNewsDetailComponent.prototype, "newsItem", void 0);
    AppNewsDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newsdetail',
            template: __webpack_require__("../../../../../src/app/views/newsdetail/app-newsdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/newsdetail/app-newsdetail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_news_service__["a" /* NewsService */]])
    ], AppNewsDetailComponent);
    return AppNewsDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/others/app-blank/app-blank.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/others/app-blank/app-blank.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"m-333\">\r\n  This is a blank component.\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/others/app-blank/app-blank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBlankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppBlankComponent = (function () {
    function AppBlankComponent() {
    }
    AppBlankComponent.prototype.ngOnInit = function () {
    };
    AppBlankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__("../../../../../src/app/views/others/app-blank/app-blank.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/others/app-blank/app-blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppBlankComponent);
    return AppBlankComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/others/others.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersModule", function() { return OthersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng5_slider__ = __webpack_require__("../../../../ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_simple_slideshow__ = __webpack_require__("../../../../ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_app_loader_app_loader_module__ = __webpack_require__("../../../../../src/app/shared/services/app-loader/app-loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_blank_app_blank_component__ = __webpack_require__("../../../../../src/app/views/others/app-blank/app-blank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__catalog_app_catalog_component__ = __webpack_require__("../../../../../src/app/views/catalog/app-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__artist_app_artist_component__ = __webpack_require__("../../../../../src/app/views/artist/app-artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__songs_app_songs_component__ = __webpack_require__("../../../../../src/app/views/songs/app-songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__playlists_app_playlists_component__ = __webpack_require__("../../../../../src/app/views/playlists/app-playlists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__playlist_app_playlist_component__ = __webpack_require__("../../../../../src/app/views/playlist/app-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__news_app_news_component__ = __webpack_require__("../../../../../src/app/views/news/app-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__newsdetail_app_newsdetail_component__ = __webpack_require__("../../../../../src/app/views/newsdetail/app-newsdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__about_app_about_component__ = __webpack_require__("../../../../../src/app/views/about/app-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__contact_app_contact_component__ = __webpack_require__("../../../../../src/app/views/contact/app-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__licenserequest_licenserequest_component__ = __webpack_require__("../../../../../src/app/views/licenserequest/licenserequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__placement_placement_component__ = __webpack_require__("../../../../../src/app/views/placement/placement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__placementdetail_placementdetail_component__ = __webpack_require__("../../../../../src/app/views/placementdetail/placementdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__musicreview_musicreview_component__ = __webpack_require__("../../../../../src/app/views/musicreview/musicreview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__others_routing__ = __webpack_require__("../../../../../src/app/views/others/others.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























// import { PlaylistTablePopupComponent } from '../../views/admin/playlist/playlistpopup/playlist-table-popup.component';

var OthersModule = (function () {
    function OthersModule() {
    }
    OthersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_25__others_routing__["a" /* OthersRoutes */]),
                __WEBPACK_IMPORTED_MODULE_7_ng5_slider__["a" /* Ng5SliderModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng_simple_slideshow__["a" /* SlideshowModule */],
                __WEBPACK_IMPORTED_MODULE_9__shared_services_app_loader_app_loader_module__["a" /* AppLoaderModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_blank_app_blank_component__["a" /* AppBlankComponent */],
                __WEBPACK_IMPORTED_MODULE_11__catalog_app_catalog_component__["a" /* AppCatalogComponent */],
                __WEBPACK_IMPORTED_MODULE_12__artist_app_artist_component__["a" /* AppArtistComponent */],
                __WEBPACK_IMPORTED_MODULE_13__songs_app_songs_component__["a" /* AppSongsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__playlists_app_playlists_component__["a" /* AppPlaylistsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__playlist_app_playlist_component__["a" /* AppPlaylistComponent */],
                __WEBPACK_IMPORTED_MODULE_16__news_app_news_component__["a" /* AppNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__newsdetail_app_newsdetail_component__["a" /* AppNewsDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__about_app_about_component__["a" /* AppAboutComponent */],
                __WEBPACK_IMPORTED_MODULE_19__home_home_component__["a" /* AppHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__contact_app_contact_component__["a" /* AppContactComponent */],
                __WEBPACK_IMPORTED_MODULE_21__licenserequest_licenserequest_component__["a" /* AppLicenseRequestComponent */],
                __WEBPACK_IMPORTED_MODULE_22__placement_placement_component__["a" /* AppPlacementComponent */],
                __WEBPACK_IMPORTED_MODULE_23__placementdetail_placementdetail_component__["a" /* PlacementdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_24__musicreview_musicreview_component__["a" /* AppMusicReviewComponent */],
            ],
            entryComponents: []
        })
    ], OthersModule);
    return OthersModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/others/others.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_app_catalog_component__ = __webpack_require__("../../../../../src/app/views/catalog/app-catalog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artist_app_artist_component__ = __webpack_require__("../../../../../src/app/views/artist/app-artist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__songs_app_songs_component__ = __webpack_require__("../../../../../src/app/views/songs/app-songs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playlists_app_playlists_component__ = __webpack_require__("../../../../../src/app/views/playlists/app-playlists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlist_app_playlist_component__ = __webpack_require__("../../../../../src/app/views/playlist/app-playlist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_app_news_component__ = __webpack_require__("../../../../../src/app/views/news/app-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newsdetail_app_newsdetail_component__ = __webpack_require__("../../../../../src/app/views/newsdetail/app-newsdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_app_about_component__ = __webpack_require__("../../../../../src/app/views/about/app-about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_app_contact_component__ = __webpack_require__("../../../../../src/app/views/contact/app-contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__licenserequest_licenserequest_component__ = __webpack_require__("../../../../../src/app/views/licenserequest/licenserequest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__placement_placement_component__ = __webpack_require__("../../../../../src/app/views/placement/placement.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__placementdetail_placementdetail_component__ = __webpack_require__("../../../../../src/app/views/placementdetail/placementdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__musicreview_musicreview_component__ = __webpack_require__("../../../../../src/app/views/musicreview/musicreview.component.ts");














var OthersRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* AppHomeComponent */],
        data: { title: 'Others', breadcrumb: 'Home' }
    },
    {
        path: 'catalog',
        component: __WEBPACK_IMPORTED_MODULE_1__catalog_app_catalog_component__["a" /* AppCatalogComponent */],
        data: { title: 'Others', breadcrumb: 'Artists' }
    },
    {
        path: 'artist/:artist_id',
        component: __WEBPACK_IMPORTED_MODULE_2__artist_app_artist_component__["a" /* AppArtistComponent */],
        data: { title: 'Others', breadcrumb: 'Artist' }
    },
    {
        path: 'songs',
        component: __WEBPACK_IMPORTED_MODULE_3__songs_app_songs_component__["a" /* AppSongsComponent */],
        data: { title: 'Songs', breadcrumb: 'Songs' }
    },
    {
        path: 'playlists',
        component: __WEBPACK_IMPORTED_MODULE_4__playlists_app_playlists_component__["a" /* AppPlaylistsComponent */],
        data: { title: 'Playlists', breadcrumb: 'Playlists' }
    },
    {
        path: 'playlist/:playlist_id',
        component: __WEBPACK_IMPORTED_MODULE_5__playlist_app_playlist_component__["a" /* AppPlaylistComponent */],
        data: { title: 'Playlist', breadcrumb: 'Playlist' }
    },
    {
        path: 'news',
        component: __WEBPACK_IMPORTED_MODULE_6__news_app_news_component__["a" /* AppNewsComponent */],
        data: { title: 'News', breadcrumb: 'News' }
    },
    {
        path: 'newsdetail/:news_id',
        component: __WEBPACK_IMPORTED_MODULE_7__newsdetail_app_newsdetail_component__["a" /* AppNewsDetailComponent */],
        data: { title: 'News Detail', breadcrumb: 'News Detail' }
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_8__about_app_about_component__["a" /* AppAboutComponent */],
        data: { title: 'About', breadcrumb: 'About' }
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_9__contact_app_contact_component__["a" /* AppContactComponent */],
        data: { title: 'Contact', breadcrumb: 'Contact' }
    },
    {
        path: 'licenserequest/:song_id',
        component: __WEBPACK_IMPORTED_MODULE_10__licenserequest_licenserequest_component__["a" /* AppLicenseRequestComponent */],
        data: { title: 'LicenseRequest', breadcrumb: 'LicenseRequest' }
    },
    {
        path: 'placements',
        component: __WEBPACK_IMPORTED_MODULE_11__placement_placement_component__["a" /* AppPlacementComponent */],
        data: { title: 'Placements', breadcrumb: 'Placements' }
    },
    {
        path: 'placement_detail/:placement_id',
        component: __WEBPACK_IMPORTED_MODULE_12__placementdetail_placementdetail_component__["a" /* PlacementdetailComponent */],
        data: { title: 'Placement Detail', breadcrumb: 'Placement Detail' }
    },
    {
        path: 'musicreviews',
        component: __WEBPACK_IMPORTED_MODULE_13__musicreview_musicreview_component__["a" /* AppMusicReviewComponent */],
        data: { title: 'MusicReviews', breadcrumb: 'MusicReviews' }
    }
];


/***/ }),

/***/ "../../../../../src/app/views/placement/placement.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-333\">\r\n  <mat-card class=\"default\" *ngFor=\"let placement of placements\">\r\n    <mat-card-title>{{placement.placement_title}}</mat-card-title>\r\n    <mat-card-content class=\"placement-content\">\r\n      <img [src]=\"placement.placement_poster || '/assets/images/avatar.png'\" alt=\"\" class=\"placement-poster\">\r\n      <p>\r\n        {{placement.placement_description}}\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-divider></mat-divider>\r\n    <mat-card-actions>\r\n      <button color=\"warn\" mat-button (click)=\"openLink(placement.placement_youtube)\">Youtube</button>\r\n      <button mat-button (click)=\"openLink(placement.placement_linkto)\">Link</button>\r\n      <button color=\"warn\" mat-button (click)=\"gotodetail(placement.placement_id)\">View Detail</button>\r\n      <span fxFlex></span>\r\n      <img *ngFor=\"let artist of placement.artists\" [src]=\"artist.artist_avatar  || '/assets/images/avatar.png'\" class=\"artist-avatar\" (click)=\"gotoartist(artist.artist_id)\">\r\n\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/placement/placement.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".placement-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .placement-content .placement-poster {\n    width: 200px;\n    -webkit-box-shadow: 3px 3px 15px -6px black;\n            box-shadow: 3px 3px 15px -6px black;\n    margin-right: 10px;\n    border-radius: 5px; }\n  .artist-avatar {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0px 0px 13px -3px #607d8b;\n          box-shadow: 0px 0px 13px -3px #607d8b;\n  cursor: pointer;\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/placement/placement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPlacementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_placement_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/placement.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppPlacementComponent = (function () {
    function AppPlacementComponent(placementService, router) {
        this.placementService = placementService;
        this.router = router;
    }
    AppPlacementComponent.prototype.ngOnInit = function () {
        this.loadPlacements();
    };
    AppPlacementComponent.prototype.loadPlacements = function () {
        var _this = this;
        this.placementService.getAll().subscribe(function (data) {
            _this.placements = data;
            console.log(data);
        });
    };
    AppPlacementComponent.prototype.openLink = function (link) {
        if (link) {
            window.open(link);
        }
    };
    AppPlacementComponent.prototype.gotoartist = function (artist_id) {
        this.router.navigate(['/page/artist/' + artist_id]);
    };
    AppPlacementComponent.prototype.gotodetail = function (placement_id) {
        this.router.navigate(['/page/placement_detail/' + placement_id]);
    };
    AppPlacementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-placement',
            template: __webpack_require__("../../../../../src/app/views/placement/placement.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/placement/placement.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_admin_placement_service__["a" /* PlacementService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], AppPlacementComponent);
    return AppPlacementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/placementdetail/placementdetail.component.html":
/***/ (function(module, exports) {

module.exports = "  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n    <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"50\" *ngIf=\"placement\">\n      <img mat-card-image [src]=\"placement.placement_poster || '/assets/images/avatar.png'\" class=\"placement-thumb\" alt=\"\">\n    </div>\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"50\" *ngIf=\"placement\">\n      <div [innerHTML]=\"spotify_embed\"></div>\n    </div>\n  \n\n  <mat-card fxFlex=\"100\" class=\"profile-sidebar mb-1 pb-0\"  *ngIf=\"placement\">\n   \n    <div class=\"profile-title mb-1\">\n      <div class=\"main-title\">{{placement.placement_title}}</div>\n      \n      <div class=\"text-muted\">{{placement.placement_description}}</div>\n    </div>\n\n    <div class=\"profile-actions mb-1\">\n      <a [href]=\"'mailto:noreply@synchaudio.com?subject=Share placement ' + placement.placement_title + '&body=' + placementsharelink\">\n        <button mat-raised-button color=\"primary\">Share</button>\n      </a>\n    </div> \n  </mat-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/placementdetail/placementdetail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".placement-thumb {\n  -webkit-box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n          box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n  border-radius: 5px;\n  -webkit-transition: all 0.15s ease 0s;\n  transition: all 0.15s ease 0s;\n  margin-top: 10px !important;\n  width: 100%; }\n  .placement-thumb:hover {\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    -webkit-box-shadow: rgba(0, 0, 0, 0.35) 0px 21px 48px 0px;\n            box-shadow: rgba(0, 0, 0, 0.35) 0px 21px 48px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/placementdetail/placementdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlacementdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_placement_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/placement.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlacementdetailComponent = (function () {
    function PlacementdetailComponent(activedRoute, placementService, sanitizer) {
        this.activedRoute = activedRoute;
        this.placementService = placementService;
        this.sanitizer = sanitizer;
    }
    PlacementdetailComponent.prototype.ngOnInit = function () {
        this.placement_id = this.activedRoute.snapshot.params['placement_id'];
        this.loadPlacement();
    };
    PlacementdetailComponent.prototype.loadPlacement = function () {
        var _this = this;
        this.placementService.getItem(this.placement_id).subscribe(function (data) {
            _this.placement = data;
            _this.placementsharelink = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].siteURL + 'page/placement_detail/' + _this.placement.placement_id;
            _this.spotify_embed = _this.sanitizer.bypassSecurityTrustHtml(data['placement_spotify_embed']);
        });
    };
    PlacementdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-placementdetail',
            template: __webpack_require__("../../../../../src/app/views/placementdetail/placementdetail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/placementdetail/placementdetail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_placement_service__["a" /* PlacementService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], PlacementdetailComponent);
    return PlacementdetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/playlist/app-playlist.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"50\" fxFlex.gt-sm=\"50\" *ngIf=\"playlist\">\r\n    <img mat-card-image [src]=\"playlist.playlist_thumb || '/assets/images/avatar.png'\" class=\"playlist-thumb\" alt=\"\">\r\n    <!-- <mat-card class=\"profile-sidebar mb-1 pb-0\">\r\n      <div class=\" text-center\">\r\n        <img mat-card-image [src]=\"playlist.playlist_thumb || '/assets/images/avatar.png'\" class=\"playlist-thumb\" alt=\"\">\r\n      </div>\r\n      <div class=\"profile-title text-center mb-1\">\r\n        <div class=\"main-title\">{{playlist.playlist_title}}</div>\r\n        \r\n        <div class=\"text-muted\">{{playlist.playlist_note}}</div>\r\n      </div>\r\n\r\n      <div class=\"profile-actions text-center mb-1\">\r\n        <a [href]=\"'mailto:noreply@synchaudio.com?subject=Share Playlist ' + playlist.playlist_title + '&body=' + playlistsharelink\">\r\n          <button mat-raised-button color=\"primary\">Share</button>\r\n        </a>\r\n      </div> \r\n    </mat-card> -->\r\n  </div>\r\n\r\n<!-- Profile Views -->\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"50\" *ngIf=\"playlist\">\r\n    <!-- <app-songitem *ngFor=\"let song of playlist.songs\" [songItem]='song'></app-songitem> -->\r\n    <div [innerHTML]=\"spotify_embed\"></div>\r\n  </div>\r\n\r\n  <mat-card fxFlex=\"100\" class=\"profile-sidebar mb-1 pb-0\"  *ngIf=\"playlist\">\r\n    <!-- <div class=\" text-center\">\r\n      <img mat-card-image [src]=\"playlist.playlist_thumb || '/assets/images/avatar.png'\" class=\"playlist-thumb\" alt=\"\">\r\n    </div> -->\r\n    <div class=\"profile-title mb-1\">\r\n      <div class=\"main-title\">{{playlist.playlist_title}}</div>\r\n      \r\n      <div class=\"text-muted\">{{playlist.playlist_note}}</div>\r\n    </div>\r\n\r\n    <div class=\"profile-actions mb-1\">\r\n      <a [href]=\"'mailto:noreply@synchaudio.com?subject=Share Playlist ' + playlist.playlist_title + '&body=' + playlistsharelink\">\r\n        <button mat-raised-button color=\"primary\">Share</button>\r\n      </a>\r\n    </div> \r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/playlist/app-playlist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".playlist-thumb {\n  -webkit-box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n          box-shadow: rgba(0, 0, 0, 0.21) 0px 3px 3px 0px;\n  border-radius: 5px;\n  -webkit-transition: all 0.15s ease 0s;\n  transition: all 0.15s ease 0s;\n  margin-top: 10px !important;\n  width: 100%; }\n  .playlist-thumb:hover {\n    -webkit-transform: scale(1.01);\n            transform: scale(1.01);\n    -webkit-box-shadow: rgba(0, 0, 0, 0.35) 0px 21px 48px 0px;\n            box-shadow: rgba(0, 0, 0, 0.35) 0px 21px 48px 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/playlist/app-playlist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPlaylistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppPlaylistComponent = (function () {
    function AppPlaylistComponent(activedRoute, playlistService, sanitizer) {
        this.activedRoute = activedRoute;
        this.playlistService = playlistService;
        this.sanitizer = sanitizer;
    }
    AppPlaylistComponent.prototype.ngOnInit = function () {
        this.playlist_id = this.activedRoute.snapshot.params['playlist_id'];
        this.loadPlaylist();
    };
    AppPlaylistComponent.prototype.loadPlaylist = function () {
        var _this = this;
        this.playlistService.getItem(this.playlist_id).subscribe(function (data) {
            _this.playlist = data;
            _this.playlistsharelink = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].siteURL + 'page/playlist/' + _this.playlist.playlist_id;
            _this.spotify_embed = _this.sanitizer.bypassSecurityTrustHtml(data['playlist_spotify_embed']);
        });
    };
    AppPlaylistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__("../../../../../src/app/views/playlist/app-playlist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/playlist/app-playlist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["DomSanitizer"]])
    ], AppPlaylistComponent);
    return AppPlaylistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/playlists/app-playlists.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"m-333\">\r\n  <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n    <div fxFlex=\"100\" fxFlex.gt-xs=\"33\" *ngFor=\"let playlist of playlists\">\r\n      <mat-card class=\"p-0\" (click)=\"gotoplaylistpage(playlist.playlist_id)\">\r\n        <div [ngStyle]=\"{background: 'url(' + (playlist.playlist_thumb || '/assets/images/avatar.png') + ')'}\" class=\"artist-thumb\"></div>\r\n        <!-- <img mat-card-image [src]=\"playlist?.playlist_thumb || '/assets/images/avatar.png'\"> -->\r\n        <mat-card-content>\r\n          <h3 class=\"playlist-title\">{{playlist.playlist_title}}</h3>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/playlists/app-playlists.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  cursor: pointer; }\n  mat-card:hover {\n    background: #ddd; }\n  mat-card .playlist-title {\n    text-align: center;\n    font-size: 17px;\n    margin-top: 20px; }\n  .artist-thumb {\n  height: 200px;\n  width: 100%;\n  background-size: cover !important;\n  background-repeat: no-repeat !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/playlists/app-playlists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppPlaylistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppPlaylistsComponent = (function () {
    function AppPlaylistsComponent(playlistService, router) {
        this.playlistService = playlistService;
        this.router = router;
    }
    AppPlaylistsComponent.prototype.ngOnInit = function () {
        this.loadPlaylists();
    };
    AppPlaylistsComponent.prototype.loadPlaylists = function () {
        var _this = this;
        this.playlistService.getAll().subscribe(function (data) {
            _this.playlists = data;
        });
    };
    AppPlaylistsComponent.prototype.gotoplaylistpage = function (playlist_id) {
        this.router.navigate(['/page/playlist/' + playlist_id]);
    };
    AppPlaylistsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-playlist',
            template: __webpack_require__("../../../../../src/app/views/playlists/app-playlists.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/playlists/app-playlists.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_admin_playlist_service__["a" /* PlaylistService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], AppPlaylistsComponent);
    return AppPlaylistsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/songs/app-songs.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\r\n  <div fxFlex=\"100\" fxFlex.gt-md=\"300px\" fxFlex.gt-sm=\"50\">\r\n    <p>FILTER BY</p>\r\n\r\n    <!-- GENRE Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>GENRE</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-grid-list cols=\"2\" rowHeight=\"30px\" class=\"genre-filter-list\" *ngIf=\"isLoadedFilterOptions\">\r\n          <mat-grid-tile *ngFor=\"let genreitem of filterOptions.genre\" (click)=\"selectGenre(genreitem)\">{{genreitem.genre_title}}</mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End GENRE Filter -->\r\n\r\n    <!-- Mood Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>MOOD</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-grid-list cols=\"2\" rowHeight=\"30px\" class=\"mood-filter-list\" *ngIf=\"isLoadedFilterOptions\">\r\n          <mat-grid-tile *ngFor=\"let mooditem of filterOptions.mood\" (click)=\"selectMood(mooditem)\">{{mooditem.mood_title}}</mat-grid-tile>\r\n        </mat-grid-list>\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End Mood Filter -->\r\n\r\n    <!-- Pace Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>Tempo</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-grid-list cols=\"2\" rowHeight=\"30px\" class=\"pace-filter-list\" *ngIf=\"isLoadedFilterOptions\">\r\n          <mat-grid-tile *ngFor=\"let paceitem of filterOptions.pace\" (click)=\"selectPace(paceitem)\">{{paceitem.pace_title}}</mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End Pace Filter -->\r\n\r\n    <!-- Artist Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>ARTIST</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n\r\n        <mat-nav-list *ngIf=\"artists\">\r\n          <mat-list-item *ngFor=\"let artist of artists\" (click)=\"selectArtist(artist)\">\r\n            <div class=\"artist-filter-item\">\r\n              <img [src]=\"artist.artist_avatar || '/assets/images/avatar.png'\">\r\n              <span>{{artist.artist_name}}</span>\r\n            </div>\r\n          </mat-list-item>\r\n        </mat-nav-list>\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End Artist Filter -->\r\n\r\n    <!-- Instruments Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>INSTRUMENTS</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-grid-list cols=\"2\" rowHeight=\"35px\" class=\"instruments-filter-list\" *ngIf=\"isLoadedFilterOptions\">\r\n          <mat-grid-tile *ngFor=\"let instrumentitem of filterOptions.instrument\" (click)=\"selectInst(instrumentitem)\">{{instrumentitem.inst_title}}</mat-grid-tile>\r\n        </mat-grid-list>\r\n        \r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End Instruments Filter -->\r\n\r\n    <!-- VOCALS / INST Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>VOCALS / INST</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-radio-group\r\n          aria-labelledby=\"example-radio-group-label\"\r\n          class=\"example-radio-group\"\r\n          [(ngModel)]=\"vocalsIns\"\r\n          (change)=\"onVocalChange($event)\">\r\n          <mat-radio-button class=\"example-radio-button\" value=\"all\">All</mat-radio-button>\r\n          <mat-radio-button class=\"example-radio-button\" value=\"vocals\">Vocals</mat-radio-button>\r\n          <mat-radio-button class=\"example-radio-button\" value=\"instrumental\">Instrumental</mat-radio-button>\r\n        </mat-radio-group>\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End VOCALS / INST Filter -->\r\n\r\n    <!-- DURATION Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>DURATION</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <ng5-slider [(value)]=\"minValueDuration\" [(highValue)]=\"maxValueDuration\" [options]=\"optionsDuration\" (userChangeEnd)=\"durationChange($event)\"></ng5-slider>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End DURATION Filter -->\r\n\r\n    <!-- Playlist Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>PLAYIST</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-nav-list *ngIf=\"playlists\">\r\n          <mat-list-item *ngFor=\"let playlist of playlists\" (click)=\"selectPlaylist(playlist)\">\r\n            <div class=\"playlist-filter-item\">\r\n              <img [src]=\"playlist.playlist_thumb  || '/assets/images/avatar.png'\">\r\n              <span>{{playlist.playlist_title}}</span>\r\n            </div>\r\n          </mat-list-item>\r\n        </mat-nav-list>\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End Playlist Filter -->\r\n\r\n    <!-- Key Filter -->\r\n    <!-- <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>KEY</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-grid-list cols=\"2\" rowHeight=\"35px\" class=\"key-filter-list\" *ngIf=\"isLoadedFilterOptions\">\r\n          <mat-grid-tile *ngFor=\"let keyitem of filterOptions.key\" (click)=\"selectKey(keyitem)\">{{keyitem.key_title}}</mat-grid-tile>\r\n        </mat-grid-list>\r\n      </mat-expansion-panel>\r\n    </mat-accordion> -->\r\n    <!-- End Key Filter -->\r\n\r\n    <!-- RIYL Filter -->\r\n    <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>RIYL</mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n  \r\n  \r\n          <mat-nav-list *ngIf=\"artists\">\r\n            <mat-list-item *ngFor=\"let artist of artists\" (click)=\"selectRIYL(artist)\">\r\n              <div class=\"artist-filter-item\">\r\n                <img [src]=\"artist.artist_avatar || '/assets/images/avatar.png'\">\r\n                <span>{{artist.artist_name}}</span>\r\n              </div>\r\n            </mat-list-item>\r\n          </mat-nav-list>\r\n  \r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n      <!-- End RIYL Filter -->\r\n\r\n    <!-- BPM Filter -->\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>BPM</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <ng5-slider [(value)]=\"minValueBPM\" [(highValue)]=\"maxValueBPM\" [options]=\"optionsBPM\" (userChangeEnd)=\"durationChange($event)\"></ng5-slider>\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    <!-- End BPM Filter -->\r\n\r\n    <!-- ADVANCED Filter -->\r\n    <!-- <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>ADVANCED</mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-selection-list #shoes>\r\n          <mat-list-option>Show only Items</mat-list-option>\r\n          <mat-list-option>Show Pre-release</mat-list-option>\r\n        </mat-selection-list>\r\n        \r\n      </mat-expansion-panel>\r\n    </mat-accordion> -->\r\n    <!-- End ADVANCED Filter -->\r\n\r\n    <!-- Filter By Cover -->\r\n    <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>Covers</mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n  \r\n          <input matInput placeholder=\"Covers\" [(ngModel)]=\"filterCover\" (keyup)=\"filter()\">\r\n  \r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    <!-- End Filter By Cover -->\r\n\r\n  </div>\r\n\r\n  <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" fxFlex.gt-md=\"calc(100% - 300px)\" class=\"songslist\">\r\n    <div class=\"selected-filters\">\r\n      <div class=\"filter-item\" *ngFor=\"let mood of filterMoods\" (click)=\"removeFilterMood(mood)\">{{mood.mood_title}}</div>\r\n      <div class=\"filter-item\" *ngFor=\"let genre of filterGenres\" (click)=\"removeFilterGenre(genre)\">{{genre.genre_title}}</div>\r\n      <div class=\"filter-item\" *ngFor=\"let pace of filterPaces\" (click)=\"removeFilterPace(pace)\">{{pace.pace_title}}</div>\r\n      <div class=\"filter-item\" *ngFor=\"let inst of filterInsts\" (click)=\"removeFilterInst(inst)\">{{inst.inst_title}}</div>\r\n      <div class=\"filter-item\" *ngFor=\"let key of filterKeys\" (click)=\"removeFilterKey(key)\">{{key.key_title}}</div>\r\n      <div class=\"filter-item\" *ngFor=\"let artist of filterArtists\" (click)=\"removeFilterArtist(artist)\">{{artist.artist_name}}</div>\r\n      <div class=\"filter-item\" *ngFor=\"let playlist of filterPlaylists\" (click)=\"removeFilterPlaylist(playlist)\">{{playlist.playlist_title}}</div>\r\n      <div class=\"filter-item\" *ngFor=\"let riyl of filterRIYL\" (click)=\"removeRIYL(riyl)\">{{riyl.artist_name}}</div>\r\n    </div>\r\n    <mat-form-field class=\"full-width-field\">\r\n      <input matInput type=\"text\" placeholder=\"Search\" [(ngModel)]=\"searchValue\" (keyup)=\"filter()\">\r\n      <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"searchValue=''\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n\r\n    <app-songitem *ngFor=\"let song of showSongs\" [songItem]='song'></app-songitem>\r\n\r\n    <div class=\"text-center mb-1\" *ngIf=\"showSongs && filterSongs && songs\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"loadMore()\" *ngIf=\"showSongs.length < filterSongs.length\">Load More</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/songs/app-songs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width-field {\n  width: 100%; }\n\n.songslist {\n  padding: 37px 10px; }\n\n.mood-filter-list, .genre-filter-list, .pace-filter-list, .instruments-filter-list, .key-filter-list {\n  max-height: 200px;\n  overflow-y: scroll; }\n\n.mood-filter-list::-webkit-scrollbar, .genre-filter-list::-webkit-scrollbar, .pace-filter-list::-webkit-scrollbar, .instruments-filter-list::-webkit-scrollbar, .key-filter-list::-webkit-scrollbar {\n    width: 0px; }\n\n.mood-filter-list mat-grid-tile:hover, .genre-filter-list mat-grid-tile:hover, .pace-filter-list mat-grid-tile:hover, .instruments-filter-list mat-grid-tile:hover, .key-filter-list mat-grid-tile:hover {\n    background: #ddd;\n    cursor: pointer; }\n\nmat-nav-list {\n  max-height: 200px;\n  overflow-y: scroll; }\n\nmat-nav-list::-webkit-scrollbar {\n    width: 0px; }\n\nmat-nav-list .playlist-filter-item, mat-nav-list .artist-filter-item {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n\nmat-nav-list .playlist-filter-item img, mat-nav-list .artist-filter-item img {\n      margin-right: 1em;\n      height: 40px;\n      width: 40px;\n      -webkit-box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 13px 0px;\n              box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 13px 0px;\n      border-radius: 3px; }\n\n.example-radio-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin: 15px 0; }\n\n.example-radio-button {\n  margin: 5px; }\n\n.selected-filters {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n\n.selected-filters .filter-item {\n    padding: 3px 10px;\n    margin: 2px 5px;\n    border: solid 2px #888;\n    border-radius: 20px;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/songs/app-songs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSongsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_filter_service__ = __webpack_require__("../../../../../src/app/shared/filter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_songs_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/songs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_artists_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/artists.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_admin_playlist_service__ = __webpack_require__("../../../../../src/app/shared/services/admin/playlist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppSongsComponent = (function () {
    function AppSongsComponent(filterService, songService, artistService, playlistService) {
        this.filterService = filterService;
        this.songService = songService;
        this.artistService = artistService;
        this.playlistService = playlistService;
        this.panelOpenState = false;
        this.vocalsIns = 'all';
        this.minValueDuration = 0;
        this.maxValueDuration = 480;
        this.optionsDuration = {
            floor: 0,
            ceil: 480,
            step: 5,
            ticksArray: [240],
            translate: function (value) {
                var mins = Math.floor(value / 60);
                var sec = value % 60;
                return mins + ' : ' + sec;
            }
        };
        this.minValueBPM = 0;
        this.maxValueBPM = 300;
        this.optionsBPM = {
            floor: 0,
            ceil: 300,
            step: 5,
            ticksArray: [150]
        };
        this.isLoadedFilterOptions = false;
        this.currentPage = 1;
        this.songsPerPage = 5;
        this.searchValue = '';
        this.filterMoods = [];
        this.filterGenres = [];
        this.filterPaces = [];
        this.filterInsts = [];
        this.filterKeys = [];
        this.filterArtists = [];
        this.filterPlaylists = [];
        this.filterRIYL = [];
    }
    AppSongsComponent.prototype.ngOnInit = function () {
        this.loadFilterOptions();
        this.loadAllSongs();
        this.loadArtists();
        this.loadPlaylists();
    };
    AppSongsComponent.prototype.loadFilterOptions = function () {
        var _this = this;
        this.filterService.getAll().subscribe(function (filter_options) {
            _this.filterOptions = filter_options;
            _this.isLoadedFilterOptions = true;
        });
    };
    AppSongsComponent.prototype.loadAllSongs = function () {
        var _this = this;
        this.songSub = this.songService.getAll().subscribe(function (data) {
            _this.songs = data;
            _this.filter();
        });
    };
    AppSongsComponent.prototype.loadArtists = function () {
        var _this = this;
        this.artistsSub = this.artistService.getAll().subscribe(function (data) {
            _this.artists = data;
        });
    };
    AppSongsComponent.prototype.loadPlaylists = function () {
        var _this = this;
        this.playlistsSub = this.playlistService.getAll().subscribe(function (data) {
            _this.playlists = data;
        });
    };
    AppSongsComponent.prototype.loadMore = function () {
        this.currentPage++;
        this.showSongs = this.filterSongs.slice(0, this.songsPerPage * this.currentPage);
    };
    //mood filer
    AppSongsComponent.prototype.selectMood = function (moodItem) {
        if (this.filterMoods.filter(function (filter) { return filter.mood_id == moodItem.mood_id; }).length) {
            return;
        }
        this.filterMoods.push(moodItem);
        this.filter();
    };
    AppSongsComponent.prototype.removeFilterMood = function (moodItem) {
        this.filterMoods = this.filterMoods.filter(function (mood) { return mood.mood_id != moodItem.mood_id; });
        this.filter();
    };
    //Genre filter
    AppSongsComponent.prototype.selectGenre = function (genreItem) {
        if (this.filterGenres.filter(function (filter) { return filter.genre_id == genreItem.genre_id; }).length) {
            return;
        }
        this.filterGenres.push(genreItem);
        this.filter();
    };
    AppSongsComponent.prototype.removeFilterGenre = function (genreItem) {
        this.filterGenres = this.filterGenres.filter(function (genre) { return genre.genre_id != genreItem.genre_id; });
        this.filter();
    };
    //pace filter
    AppSongsComponent.prototype.selectPace = function (paceItem) {
        if (this.filterPaces.filter(function (filter) { return filter.pace_id == paceItem.pace_id; }).length) {
            return;
        }
        this.filterPaces.push(paceItem);
        this.filter();
    };
    AppSongsComponent.prototype.removeFilterPace = function (paceItem) {
        this.filterPaces = this.filterPaces.filter(function (pace) { return pace.pace_id != paceItem.pace_id; });
        this.filter();
    };
    //Inst filter
    AppSongsComponent.prototype.selectInst = function (instItem) {
        if (this.filterInsts.filter(function (filter) { return filter.inst_id == instItem.inst_id; }).length) {
            return;
        }
        this.filterInsts.push(instItem);
        this.filter();
    };
    AppSongsComponent.prototype.removeFilterInst = function (instItem) {
        this.filterInsts = this.filterInsts.filter(function (inst) { return inst.inst_id != instItem.inst_id; });
        this.filter();
    };
    //Key filter
    AppSongsComponent.prototype.selectKey = function (keyItem) {
        if (this.filterKeys.filter(function (filter) { return filter.key_id == keyItem.key_id; }).length) {
            return;
        }
        this.filterKeys.push(keyItem);
        this.filter();
    };
    AppSongsComponent.prototype.removeFilterKey = function (keyItem) {
        this.filterKeys = this.filterKeys.filter(function (key) { return key.key_id != keyItem.key_id; });
        this.filter();
    };
    //Artist filter
    AppSongsComponent.prototype.selectArtist = function (artistItem) {
        if (this.filterArtists.filter(function (filter) { return filter.artist_id == artistItem.artist_id; }).length) {
            return;
        }
        this.filterArtists.push(artistItem);
        this.filter();
    };
    AppSongsComponent.prototype.removeFilterArtist = function (artistItem) {
        this.filterArtists = this.filterArtists.filter(function (artist) { return artist.artist_id != artistItem.artist_id; });
        this.filter();
    };
    //Playlist filter
    AppSongsComponent.prototype.selectPlaylist = function (playlistItem) {
        if (this.filterPlaylists.filter(function (filter) { return filter.playlist_id == playlistItem.playlist_id; }).length) {
            return;
        }
        this.filterPlaylists.push(playlistItem);
        this.filter();
    };
    AppSongsComponent.prototype.removeFilterPlaylist = function (playlistItem) {
        this.filterPlaylists = this.filterPlaylists.filter(function (playlist) { return playlist.playlist_id != playlistItem.playlist_id; });
        this.filter();
    };
    AppSongsComponent.prototype.selectRIYL = function (artist) {
        if (this.filterRIYL.filter(function (filter) { return filter.artist_id == artist.artist_id; }).length) {
            return;
        }
        this.filterRIYL.push(artist);
        this.filter();
    };
    AppSongsComponent.prototype.removeRIYL = function (artist) {
        this.filterRIYL = this.filterRIYL.filter(function (riyl) { return artist.artist_id != riyl.artist_id; });
        this.filter();
    };
    AppSongsComponent.prototype.filter = function () {
        var _this = this;
        this.currentPage = 1;
        this.filterSongs = this.songs;
        if (this.searchValue) {
            this.filterSongs = this.songs.filter(function (song) { return song.song_title && song.song_title.toLowerCase().includes(_this.searchValue.toLowerCase()); });
        }
        //mood filter
        if (this.filterMoods.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                return _this.filterMoods.filter(function (filter) { return filter.mood_title == song.song_mood; }).length;
            });
        }
        //genre filter
        if (this.filterGenres.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                return _this.filterGenres.filter(function (filter) { return filter.genre_title == song.song_genre; }).length;
            });
        }
        //pace filter
        if (this.filterPaces.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                return _this.filterPaces.filter(function (filter) { return filter.pace_title == song.song_pace; }).length;
            });
        }
        //Inst filter
        if (this.filterInsts.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                return _this.filterInsts.filter(function (filter) { return filter.inst_title == song.song_instrument; }).length;
            });
        }
        //Key filter
        if (this.filterKeys.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                return _this.filterKeys.filter(function (filter) { return filter.key_title == song.song_key; }).length;
            });
        }
        //Artist filter
        if (this.filterArtists.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                return _this.filterArtists.filter(function (filter) { return filter.artist_id == song.song_artist.artist_id; }).length;
            });
        }
        //Playlist filter
        // if(this.filterPlaylists.length) {
        //   this.filterSongs = this.filterSongs.filter(song => {
        //     return this.filterPlaylists.filter(filter => filter.playlist_id == song.song_playlist).length
        //   })
        // }
        this.filterSongs = this.filterSongs.filter(function (song) { return song.song_duration == null || (parseInt(song.song_duration) >= _this.minValueDuration && parseInt(song.song_duration) <= _this.maxValueDuration); });
        this.filterSongs = this.filterSongs.filter(function (song) { return song.song_bpm == null || (parseInt(song.song_bpm) >= _this.minValueBPM && parseInt(song.song_bpm) <= _this.maxValueBPM); });
        if (this.vocalsIns != 'all') {
            this.filterSongs = this.filterSongs.filter(function (song) { return song.song_vocals_inst == _this.vocalsIns; });
        }
        if (this.filterRIYL.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                var riyls = [];
                if (song.song_riyl) {
                    riyls = song.song_riyl.split(',');
                    var isExist = false;
                    _this.filterRIYL.map(function (riyl) {
                        if (riyls.includes(riyl.artist_id)) {
                            isExist = true;
                        }
                    });
                    return isExist;
                }
                return false;
            });
        }
        //Artist filter
        // if(this.filterPlaylists.length) {
        //   this.filterSongs = this.filterSongs.filter(song => {
        //     return this.filterPlaylists.filter(filter => filter.playlist_id == song.song_playlist).length
        //   })
        // }
        if (this.filterPlaylists.length) {
            this.filterSongs = this.filterSongs.filter(function (song) {
                var playlists = [];
                if (song.song_playlist) {
                    playlists = song.song_playlist.split(',');
                    var isExist = false;
                    _this.filterPlaylists.map(function (playlist) {
                        if (playlists.includes(playlist.playlist_id)) {
                            isExist = true;
                        }
                    });
                    return isExist;
                }
                return false;
            });
        }
        if (this.filterCover) {
            this.filterSongs = this.filterSongs.filter(function (song) { return song.song_covers && song.song_covers.toLowerCase().includes(_this.filterCover.toLowerCase()); });
        }
        this.showSongs = this.filterSongs.slice(0, this.songsPerPage * this.currentPage);
    };
    AppSongsComponent.prototype.durationChange = function (e) {
        this.filter();
    };
    AppSongsComponent.prototype.onVocalChange = function (event) {
        this.filter();
    };
    AppSongsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-songs',
            template: __webpack_require__("../../../../../src/app/views/songs/app-songs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/songs/app-songs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_filter_service__["a" /* FilterService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_admin_songs_service__["a" /* SongsService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_admin_artists_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_admin_playlist_service__["a" /* PlaylistService */]])
    ], AppSongsComponent);
    return AppSongsComponent;
}());



/***/ })

});
//# sourceMappingURL=others.module.chunk.js.map