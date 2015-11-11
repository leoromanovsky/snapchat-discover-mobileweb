/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/es6-promise.d.ts"/>
/// <reference path="typings/fullPage.d.ts"/>
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var mapboxAccessToken = "pk.eyJ1Ijoic3RyYXZhbHIiLCJhIjoiQjV5dllkNCJ9.Jso5bao3AOEvB1NjbkPJXg";
var Activity = (function () {
    function Activity(activityId, instagramIds, encodedPolyline) {
        this.activityId = activityId;
        this.instagramIds = instagramIds;
        this.encodedPolyline = encodedPolyline;
    }
    return Activity;
})();
var journeyOregon = [
    new Activity(325677281, [], "{epaHtmtiVd@{N`N_ODsjAvZQ~@qBU{H~CmHxP}JdG}My@mTx@}SwCg@GaHnBkJ}CyQJwl@}A_@`ByG`C{pEoDuRlAgNkD}DwBsVkDqIxEgZnGnBrJeh@tEuIlB`CaBiCZoB|KwVfDgQlYej@xCkMtCav@}Kou@TpEzCUnDyh@iBsG{C{AkBii@h@sHvNbJnNbCzXy@hMsDvI|F|HhUzGnIjVfGjOhN`XbMnMbNzv@l@x_@qDva@pZdf@rg@~a@zT~M}A`Z{^zu@}YbGb@xIlHfBKrKfYxIfIh^lBPoKnl@pCjLuUpP|@eDaQz[eiA|BcOd@eIwAsA}@aNdGgn@zTg|@vKs[qAk@bEwTtPmjBsB}FbDm@rHuz@xAsg@RmyAxL}tCbGuJv_@{SjPcPvk@sGbN}GrcAmzAveCurBaBlEx@zC{@eDhBmEpIiDbHn@fGxDvLrRvFzEfq@tCnQjJ~UrWhP~@hKqGpDyInCcp@zI_S`RcRh\yEzm@ge@p`@mVnOsFh_@}E`y@qClk@wd@bRJ|OmPb_Am^`V`Bhs@kO|QqMra@qAnKoC|JaHba@gj@dPuGpb@lElb@fOtRhBlOmE|O{_@jH}FjEk@pT`@~`@tV~GnAj~G{ApOpNoClJ|ChEL|NvI@"),
    new Activity(326771962, [], "chb_HthqgVdJ~JeElLgCV_AvO`UK|@}\pGtJxfBbjBtIdOrPhf@`FdIhPbL|h@`Rlb@fe@bAmAxRjTrCFv|AbeBlA`U{MtXOj\_E|UfJrXbRQ~EpHcBfQsLvNBheAdEvS|AzRpBj@zGd{@`q@`qC~FlMxG`DpEi@p[cRpSlCr[l]zOte@rKzRfd@tUjcArv@pIhVpGv`@jGvg@h@fVYyR_E_^`Gl@tKn[jKbKpB~Et@n`ArgClErf@ze@jd@tX~d@j{@fI{@`J_VlFmBpLpH~My@nLjHnJe@hIbPtHhGpd@`EjO_Cpg@FvAsD?kWnA_Hj~@egAjImD~YlGfGzHhIjV`Ctf@vMhr@nFzQz@diA|Cjd@fb@`@vIeGvv@iBrKbBd[lNtPxBza@uBzKbJlErH~Hlc@dOte@hFdKlJtLti@fa@xXpGp\v@tZ}Hz]eSrUl@pHvCfH`Lvh@hgBzMnX`KhHdh@rJrQeJlQuU|PlAjNoChJ`AvJxRdPbA{Amt@hH}XfSkZtKq@lEoSNfCiGlO`UgAzKuf@`hEy|g@ffF_im@hcAqpL`DcB|AoEWoGsG{BuCmIj@wOi@lHcBkHsC_D"),
    new Activity(327057979, [], "}`q|G`f_fV~Thf@gK|V`W|GwJn^rM}RpOxC}Eaw@h@lYl]jb@oMnXtAhVwM`Of\tW`Xjn@p@`SmLbO_a@qcA}WyYgHjJ|Qn~@_Fxc@xV`u@wD__@`LyIl\\x_@|@d[rXe@p]tkAls@nXq@pd@~ToBhDiPtlBx@}jByGhgBnfAp^zc@l@l^~]oOnlAm{Ah\_AzvAelAnb@upAhDwkAfdB__FvVsOnBom@~Nia@v`@R~Ys\dm@aIzFoUhy@gZve@{_Csb@}gA~}@~r@bx@u[jTyd@dBch@vuBfiBfsA~UjmF|aLn_@t{BwIb|C~MxnE{JrvVdl@d@|n@yS`G}wAjZiJdk@__A`bBov@pn@}dA~PaDzDsj@tf@us@eGuSv_@}Idz@e}@rMwaAlXuWbTybAza@mmEuGitBqYs|@pz@gfAhe@whA~`Aa`@jh@igAtxBkeB`lBv@z|Ac{@hf@nTfaBodBjSmA~_B~oBp{@~\rq@wHts@{q@`IyXc@yvAyKibAh_@geBvQcOpDgj@jZai@j`@whHz`@uXhEal@jS}FfkA~zAxCop@|ShCpFh_@~\Q|g@he@`Kzc@hS`Sh[`@vEeVpSfEjDi^|iAtxAlUg\~ItEdi@rwAnb@mJ~g@n_@nT{e@h[}E`Xas@hi@gTbzAlDb|@o\h}AvZpv@u[jr@{}@nkBgp@vNdGha@{g@tf@wTnPuq@nhA}bBrsAqv@hf@ehA|Z~Hzl@w_ApvAaw@``@ys@`sBkAh|@g|@xEn}@s[G"),
    new Activity(329632594, [], "oo~uGzvsdVUlyAzFwFv@fELno@|m@zCFzWxRv@h@ta@tT@rBaOnf@j@xCjOlrCr@bPwKdP|MhDzSbJbFlPp`@Ub\~@cMdEho@nHvVvPhlAzJxL~\lAnm@`kApw@`bAzg@`iAl[be@`QzJpk@rKfdAcI~CjOh`AxB|Br~@`l@jAdBpy@v[dZlPtlAdAxc@xKzR`Sdp@nH~~@lPna@xW~NpHvShJ~EjC~fAtGhP~SdNrG~o@g@nMzYt`@lP``@fs@nEG_FcLr@cA{NyL}Dxz@q`@vBtAwEBlTqBpg@lWzd@nHhw@`bA`NxDbPx\vT~T|pAj_AlEpZf[zU~c@aCp`@{Wrh@iCnd@{Ob_AhR`DiH~PmAre@c]f[pDhAxH}GzS{v@rf@q_@jDaY|RnSnInUiFr\dCzWqKbN~KgNjWcCrPq[h\lC|K{Ejd@pLvbAdRxQlDdV|ThFtKv`@jAp\{DnRnHnIbJcM~LhJnJzV`CbYpNdWi@nUnYdJtFrc@pOs@lGlJl@pQtWJdPxYne@rZCb]jIlOpAfNtIpBlC`GfFvd@pDfB`Ad_@`Mve@fDfo@fa@jaAjFr^dt@p|@jf@vLzM~M|e@nFm@rNxCzB"),
    new Activity(329633344, [], "_ttsG~wzeVrDqOb`@zKlAk^j^eSrHdMmT|a@dcAuc@xJpPxJ}e@tEt@_EpZhErOaJtRrJjJ}Db`@pKuBe@`SrQrg@}CvNgXhGqDbNp\pLvF`[kRz`Bxb@X_b@cDgDzVpStvAsScnAdCsd@xQvBgP`@YcJzRmqBhOeLfv@vDp`@{~@|C}}@f^k@z[vVx[|At_DkdAnJcKfEi^|RaLta@~X|l@y\|~AfGbhBk}@~]cgAtcAmFfQ{UwK~n@~u@hf@djAgO`ThLn|@d|AteAb\lg@kOh]~^jl@`FrTfZdEtn@pd@p\eHfX{VvRxKfh@sArR~Wpf@le@`[reB~[`^`y@zj@xh@pqAdCdcAbYfk@sRfr@qm@tjAuI~b@ma@lqB|WlIpe@aJbbAjFxfAfSpl@zi@fa@hJva@fpAcJd`@`{@uFv~Ajc@hCzF|LySrd@s`@tHdGlYb[rSyg@fw@vOpZkL`f@yX~@}b@nYicAv@[lVvJfIb[~@n`Btp@xReGvRa\dqAbPfbEpBpk@zMbeAob@|Kw]b\vS~c@sEpc@kYjj@agAl^iR`rAppArsA`E~i@p|@d}AaZbXyUpTuh@iCvpAta@nm@fHr{@zWve@b@p`A`jAroEIpk@kRpm@mFvtAxAhQb_@r]lFh]~OhRoTbqCo\bsAp^xvCzw@zyA_DjbAvj@`aBg@rm@loAdnB@rWvb@dsAp_@fh@ld@bQ"),
    new Activity(330410022, ["4Nd8AvxRNB"], "gm`pGtvphVx`@aXxQ}bAxxA{vBhq@owCvXc}BfSwf@Ygn@h[ehArYqQdIagA_Q}c@uEiy@fPck@yDmj@|CeV{LkVt@oa@sTaz@vGqn@bFeGzg@oKbdA}v@n_AyXvt@yh@hwAaf@rd@o^||Bzw@x`AvsA|\pQve@zgA|p@vb@ty@jK|HtQ~Dru@n[j[rr@gFnn@w`@tf@z@`VzKnmB_KbWdDl`@fZbmB|Yf_AiKbn@{x@~b@uGni@i~@di@uLzjBm~@v[o_AvGasA~V_oBpRcJ|LqUkCeeBrEco@yOwfCnHqFpOpRt\lC|NuMdCyQwKqe@qZmvC~Nm~@iOikAzMobBgEuWlBkXv\}_Bt@a_Bgz@kqEcAu`AiHup@pqEexE~wAy`Cpu@_xDtQc_@znMelKoFma@z\eAs@iU~Eq@|@aZ|Rc_@ts@yfCbbBmdAh}AclCrTos@hq@}g@xoAiyCnl@igCp~Bq{C?s_B}Tc[Esy@_Hk^~BoRta@kj@uEe`@h@q|CleEm@jPjK~U_I`O`Yl^bP~YJ|I|O~Tv@lNqQv_@mDd\zH^vKiAcKdIvAvCyHdBmUkFeHdGiIlhA_c@fSn@rs@sg@fc@`Khb@wWtjAa^|`A`GbA`PxWxAh`@`d@uAdg@lKzN~LoE")
];
var journeyCoastRide = [
    new Activity(246688456, [], "uaweF|vojVf}BrnBrXiJpb@leCruAkHnrRayC~J~g@~x@}Grd@jKf}Ai@`m@ij@j`@k@jQfGpl@`dAjc@rD~h@lk@pu@uFnGnaA`_AnP~z@o`@rd@xK`u@_PraBjd@viAk|@deBq~CdfAaoDhnAqx@fgAeeAxbArBpfAkb@b`D_QdjCwm@`pA}oAh`CmDnr@cn@dj@dHv|B}l@rIdEpDj^jz@ta@dxCpUxi@{I|f@`TrqFl}@ty@cVj{@qo@zx@}AntBei@t~@{q@hM}gA`r@_{ApeAi`@voAkaAv~@qkD|gAyaAvrA_r@rcCciDda@oM|x@kx@xiByhAriCwsCfb@cRri@i`AvpAevAph@uoAfw@a~@hd@i`AlfAegDv~@i~ApEwi@ri@_dBxI_q@wCo_CxFegBjEi@mCk_A{v@ow@nE_]_Eax@e]ek@oMsmAm]fE_Bgl@qk@ydB|JkvAqIklAhIeWsCckA}Nos@rr@_yBtb@ge@kCsVhIml@cEss@lI{D`Rat@_AyXzNhPtUcc@vXq@`[mYfbA{Fxj@o^np@nOb~@koCb^u`@vdAy^ti@me@~_BapCjuAdrBm}Ay~Bbk@sW`e@oe@jPxUbHpf@xPvOvGpCpK}WhZfH`YclAwHuW@_v@fsC`@vcAfzA`nDsMbaAqb@xh@jz@taAtChXiNlnB{wB|n@bvAfm@jo@xgC`DjbFh_DnaAbOrw@}Gv`Az|AttAtaAbBrW`RtKrVuDaHjQh`@da@bUri@pVT|IpQEyGdT~iAwChzAxl@dMtRd["),
    new Activity(246691145, [], "_ri~Eh~~fVpk@j]pKkM|e@btAxnEg\`rAheAfpA|kB~_@zEbRoLva@pM|SiO`l@lOvtBuRbqAibAv_ArKtpCotAj_BzJhrAkfAdtAyQby@v\|w@wa@|e@dEhH|MbpA_cAzm@aBlT_e@zFra@v\lTljA{T~|Ac{A|bAwjCdDq|@pkAotBtYu`Bbl@wn@vBki@`]_f@tr@qJzSa^~g@_VvZgv@rt@o]zSmf@dKtDvKy]vJrBfIc[~Kd@fO_p@`Ym]mAqUvSxEz@_XxSsOtJgp@d\qj@mHaOpXmA|p@_x@no@iSi@u\lUaGnc@}vA~dAiq@~y@qkAnsBa`Blo@chAfq@qL~fAoq@r{A}Sb}@caApWwDng@gsApfAg[r^jLbt@ut@phBs`AfPkc@cDe`AhQydBpYoz@x\a]vPckA`m@eaA|bEmlBhgBqQjfBmdAdjAiThq@rRpaAkq@nVjIfXmRd{@jCj_Cc{Cjf@y_AfYmlAbcBchAdYkc@eAiRfVQfe@ke@v_@yt@kBeQnVaBvCkS`a@a\IiWcWaT~i@|KvPun@pMkIoBgJzw@a[hCoTbd@oVKqNte@oc@xf@_Lxf@qYCoJpO~FtQgUhXdMfk@cz@||CtPv`BubAtt@Lxe@sz@lj@uc@fqAwTth@qh@xk@yfCvy@iyAzJ{gFr`BmtFnaBonA|hCi`DpiAe`@t~AokApe@sfA`x@ak@jD_}Az}A_xBbiBi{AnqDygF`{BgcB|Lwg@deBiaDbZghArL{wBcCspBxq@idBjpE_wBjz@gv@p~DqlA"),
    new Activity(243420524, [], "kzzvE`rr`Vvr@{A|]gc@lr@uHtFeVcMa[ok@if@drB{\rFaW~[eSZoUlZce@`Lck@yIgj@bDiPsIaOl\wn@r}@g^ziAvJpqCctK{`@eUwjAihCE_yAtq@_Uhd@w_@xHbFoGbEqJi`@tPz[nvBu_B|~Akp@`_Aiy@h|@od@vf@_s@bz@oKfp@kf@nwAd{@bh@hGv}@ja@hWvYtLp`@v\cUx[gA~`Bzo@bp@mi@~}@qOhhBex@rb@_x@L}|BhiAhAx`@u\voBz`Ajz@eJt_@_SjF_jCxj@mNld@yf@rk@IvnCxx@jwDpBx^tPdnDS`qBedA|lBqzC|]{gAzuBktDp}@qtDzp@ckAtP}Jz~FkV`xB{f@`_A`~Av|@~aAlElx@nWjx@qCfr@`JxqAhqB`_@x\td@|_Do}Cdo@oa@lZQfk@vbA`XfFnmB\feA_t@vhAaChBuyE|fC?j@glBeM{Zdo@qW~\rC|b@}Tpx@_Llb@wr@xw@mFfSqj@dbAkSnFeNwGcs@`IegA~|@eqAbo@sd@`jDcqAt_B}qAb\}iA|Cs}@ui@cnBcJmcAfReo@b^yyBrByq@zh@}{BfB{_@de@}Gvl@|[jMyCrKeUlTmC|g@fZtn@oTrIkTrJaxIcPobB{AkiAlQ}oCxu@y{B|Ikm@eBubAaW{~@bS_hAeK{zBvQaeEr^akExpAi`Ch^}bDfs@q`DwGm_Ic^ktBtFmeEmb@wzD\_aGnHqJ"),
];
function instagramUrl(id, requestedWidth) {
    var size = 'l';
    if (requestedWidth <= 320) {
        size = 'm';
    }
    return "https://www.instagram.com/p/" + id + "/media?size=" + size;
}
function mapboxStaticMap(arg) {
    return "https://api.mapbox.com/v4/stravalr.lo8l8hlh/" + arg + "?access_token=" + mapboxAccessToken;
}
function mapboxMapSize(height, width) {
    return "" + height + "x" + width;
}
var FullPageManager = (function () {
    function FullPageManager(docHeight, docWidth) {
        this.firstPage = new FirstPage();
        this.lastPage = new LastPage();
        this.docHeight = docHeight;
        this.docWidth = docWidth;
    }
    FullPageManager.prototype.render = function () {
        return "\n            " + this.firstPage.render() + "\n            " + this.pages().map(function (p) {
            return p.render();
        }).join('') + "\n            " + this.lastPage.render() + "\n            ";
    };
    FullPageManager.prototype.documentWidth = function () {
        return this.docWidth;
    };
    FullPageManager.prototype.documentHeight = function () {
        return this.docHeight;
    };
    FullPageManager.prototype.completePolyline = function (journey) {
        return journey.map(function (j) {
            return encodeURIComponent(j.encodedPolyline);
        }).join('');
    };
    FullPageManager.prototype.dynamicSection = function (journey, active) {
        if (active === void 0) { active = false; }
        var that = this;
        var slides = '';
        // First slide has the complete polyline.
        //var slides = `<div class="slide"><img src="${mapboxStaticMap(`path-5+f44+f44(${this.completePolyline(journey)})/auto/${mapboxMapSize(that.documentWidth(), that.documentHeight())}.png`)}" width="${that.documentWidth()}" height="${that.documentHeight()}" /></div>`;
        // The rest of the slides.
        slides += journey.map(function (j) {
            var map = "<div class=\"slide\"><img src=\"" + mapboxStaticMap("path-5+f44+f44(" + encodeURIComponent(j.encodedPolyline) + ")/auto/" + mapboxMapSize(that.documentWidth(), that.documentHeight()) + ".png") + "\" width=\"" + that.documentWidth() + "\" height=\"" + that.documentHeight() + "\" /></div>";
            if (j.instagramIds.length > 0) {
                map += j.instagramIds.map(function (instagramId) {
                    return "<div class=\"slide\"><img src=\"" + instagramUrl(instagramId, that.documentWidth()) + "\" width=\"" + that.documentWidth() + "\" /></div>";
                }).join('');
            }
            return map;
        }).join('');
        var activeClass = '';
        if (active) {
            activeClass = 'active';
        }
        return new Section("<div class=\"section " + activeClass + "\">" + slides + "</div>");
    };
    FullPageManager.prototype.pages = function () {
        return [
            this.dynamicSection(journeyOregon, true),
            this.dynamicSection(journeyCoastRide, false),
            new Section("<div class=\"section\">\n              <div class=\"slide\">\n                <img src=\"" + instagramUrl('4QqH_uxRLf', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" />\n              </div>\n              <div class=\"slide\">\n                <img src=\"" + mapboxStaticMap("path-5+f44+f44(acreF%60m%60jV%60A%60Dq%60@sh@eEeHH_DwJl@%7D~AzvAcJzMeGfP~G%60eA%7DCbH%60Cd%5E_CtEeG%60DEnEdDjItIrCjCjFuAdDOpMsFrKfRnoC%60CbHuC%60h@hFkC%7COt@~ApAMxEbCvAnBQbCkGhGjHrFKJuBiGqMDmEjFcFzAiHhIgFnD%7DNpIk@~D%60De@oKbDw@WqHxCm@oAgSlDk@%7BCqf@lIkA)/auto/" + mapboxMapSize(this.documentWidth(), this.documentHeight()) + ".png") + "\" width=\"" + this.documentWidth() + "\" height=\"627\" />\n              </div>\n              <div class=\"slide\"><img src=\"" + instagramUrl('34rI74xRFj', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" /></div>\n            </div>"),
            new Section("\n            <div class=\"section\">\n              <div class=\"slide\">\n                <img src=\"" + mapboxStaticMap("path-5+f44+f44(kumwFrjvbMaf%40kuD%7BnCkS)/auto/" + mapboxMapSize(this.documentWidth(), this.documentHeight()) + ".png") + "\" width=" + this.documentWidth() + "\" height=\"627\" />\n              </div>\n              <div class=\"slide\">\n                <img src=\"" + instagramUrl('4IZpIZRRHi', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" />\n              </div>\n              <div class=\"slide\">\n                <img src=\"" + instagramUrl('371ql4RRC1', this.documentWidth()) + "\" width=\"" + this.documentWidth() + "\" />\n              </div>\n            </div>")
        ];
    };
    FullPageManager.prototype.initPlugin = function () {
        $('#fullpage').fullpage({
            loopHorizontal: false,
            slidesNavigation: true,
            verticalCentered: false
        });
    };
    return FullPageManager;
})();
var Section = (function () {
    function Section(el) {
        this.el = el;
    }
    Section.prototype.render = function () {
        return this.el;
    };
    return Section;
})();
var FirstPage = (function (_super) {
    __extends(FirstPage, _super);
    function FirstPage() {
        _super.call(this, '');
    }
    FirstPage.prototype.render = function () {
        return "\n        <div id=\"settings\" class=\"section\">\n            <div id=\"settingsContent\">\n                <img class=\"labslogo\" src=\"images/strava-labs-logo.png\" />\n            </div>\n        </div>";
    };
    return FirstPage;
})(Section);
var LastPage = (function (_super) {
    __extends(LastPage, _super);
    function LastPage() {
        _super.call(this, '');
    }
    LastPage.prototype.render = function () {
        return "\n        <div id=\"end\" class=\"section\">\n          <div id=\"endContent\">\n            <h1>What will you discover next?</h1>\n            <h2>Come back tomorrow at 10am ET to explore more.</h2>\n            <img class=\"labslogo\" src=\"images/strava-labs-logo.png\" />\n          </div>\n        </div>";
    };
    return LastPage;
})(Section);
function loadData() {
    return new Promise(function (resolve, reject) {
        var args = {
            url: "https://d3fgbtl4ah93i4.cloudfront.net/ignis/journeys/run5.json",
            dataType: 'json',
            success: function (data) {
                resolve(data);
            },
            error: function (error) {
                reject(error);
            }
        };
        console.log('start');
        jQuery.ajax(args);
    });
}
$(function () {
    loadData().then(function (data) {
        console.log("data!", data);
    });
    var docHeight = $(document).height();
    var docWidth = $(document).width();
    var pageManager = new FullPageManager(docHeight, docWidth);
    $('#fullpage').html(pageManager.render());
    pageManager.initPlugin();
    setTimeout(function () {
        $('#loader').fadeOut(1000);
    }, 1500);
});
//# sourceMappingURL=index.js.map