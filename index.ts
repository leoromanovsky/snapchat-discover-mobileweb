/// <reference path="typings/jquery.d.ts"/>
/// <reference path="typings/fullPage.d.ts"/>

var mapboxAccessToken: string = "pk.eyJ1Ijoic3RyYXZhbHIiLCJhIjoiQjV5dllkNCJ9.Jso5bao3AOEvB1NjbkPJXg";

class Journey {
    activityId: number;
    instagramIds: Array<String>;
    encodedPolyline: string;

    constructor(activityId: number, instagramIds: Array<String>, encodedPolyline: string) {
        this.activityId = activityId;
        this.instagramIds = instagramIds;
        this.encodedPolyline = encodedPolyline
    }
}

var journeys: Array<Journey> = [
    new Journey(325677281, [], "{epaHtmtiVd@{N`N_ODsjAvZQ~@qBU{H~CmHxP}JdG}My@mTx@}SwCg@GaHnBkJ}CyQJwl@}A_@`ByG`C{pEoDuRlAgNkD}DwBsVkDqIxEgZnGnBrJeh@tEuIlB`CaBiCZoB|KwVfDgQlYej@xCkMtCav@}Kou@TpEzCUnDyh@iBsG{C{AkBii@h@sHvNbJnNbCzXy@hMsDvI|F|HhUzGnIjVfGjOhN`XbMnMbNzv@l@x_@qDva@pZdf@rg@~a@zT~M}A`Z{^zu@}YbGb@xIlHfBKrKfYxIfIh^lBPoKnl@pCjLuUpP|@eDaQz[eiA|BcOd@eIwAsA}@aNdGgn@zTg|@vKs[qAk@bEwTtPmjBsB}FbDm@rHuz@xAsg@RmyAxL}tCbGuJv_@{SjPcPvk@sGbN}GrcAmzAveCurBaBlEx@zC{@eDhBmEpIiDbHn@fGxDvLrRvFzEfq@tCnQjJ~UrWhP~@hKqGpDyInCcp@zI_S`RcRh\yEzm@ge@p`@mVnOsFh_@}E`y@qClk@wd@bRJ|OmPb_Am^`V`Bhs@kO|QqMra@qAnKoC|JaHba@gj@dPuGpb@lElb@fOtRhBlOmE|O{_@jH}FjEk@pT`@~`@tV~GnAj~G{ApOpNoClJ|ChEL|NvI@"),
    new Journey(326771962, [], "chb_HthqgVdJ~JeElLgCV_AvO`UK|@}\pGtJxfBbjBtIdOrPhf@`FdIhPbL|h@`Rlb@fe@bAmAxRjTrCFv|AbeBlA`U{MtXOj\_E|UfJrXbRQ~EpHcBfQsLvNBheAdEvS|AzRpBj@zGd{@`q@`qC~FlMxG`DpEi@p[cRpSlCr[l]zOte@rKzRfd@tUjcArv@pIhVpGv`@jGvg@h@fVYyR_E_^`Gl@tKn[jKbKpB~Et@n`ArgClErf@ze@jd@tX~d@j{@fI{@`J_VlFmBpLpH~My@nLjHnJe@hIbPtHhGpd@`EjO_Cpg@FvAsD?kWnA_Hj~@egAjImD~YlGfGzHhIjV`Ctf@vMhr@nFzQz@diA|Cjd@fb@`@vIeGvv@iBrKbBd[lNtPxBza@uBzKbJlErH~Hlc@dOte@hFdKlJtLti@fa@xXpGp\v@tZ}Hz]eSrUl@pHvCfH`Lvh@hgBzMnX`KhHdh@rJrQeJlQuU|PlAjNoChJ`AvJxRdPbA{Amt@hH}XfSkZtKq@lEoSNfCiGlO`UgAzKuf@`hEy|g@ffF_im@hcAqpL`DcB|AoEWoGsG{BuCmIj@wOi@lHcBkHsC_D"),
    new Journey(327057979, [], "}`q|G`f_fV~Thf@gK|V`W|GwJn^rM}RpOxC}Eaw@h@lYl]jb@oMnXtAhVwM`Of\tW`Xjn@p@`SmLbO_a@qcA}WyYgHjJ|Qn~@_Fxc@xV`u@wD__@`LyIl\\x_@|@d[rXe@p]tkAls@nXq@pd@~ToBhDiPtlBx@}jByGhgBnfAp^zc@l@l^~]oOnlAm{Ah\_AzvAelAnb@upAhDwkAfdB__FvVsOnBom@~Nia@v`@R~Ys\dm@aIzFoUhy@gZve@{_Csb@}gA~}@~r@bx@u[jTyd@dBch@vuBfiBfsA~UjmF|aLn_@t{BwIb|C~MxnE{JrvVdl@d@|n@yS`G}wAjZiJdk@__A`bBov@pn@}dA~PaDzDsj@tf@us@eGuSv_@}Idz@e}@rMwaAlXuWbTybAza@mmEuGitBqYs|@pz@gfAhe@whA~`Aa`@jh@igAtxBkeB`lBv@z|Ac{@hf@nTfaBodBjSmA~_B~oBp{@~\rq@wHts@{q@`IyXc@yvAyKibAh_@geBvQcOpDgj@jZai@j`@whHz`@uXhEal@jS}FfkA~zAxCop@|ShCpFh_@~\Q|g@he@`Kzc@hS`Sh[`@vEeVpSfEjDi^|iAtxAlUg\~ItEdi@rwAnb@mJ~g@n_@nT{e@h[}E`Xas@hi@gTbzAlDb|@o\h}AvZpv@u[jr@{}@nkBgp@vNdGha@{g@tf@wTnPuq@nhA}bBrsAqv@hf@ehA|Z~Hzl@w_ApvAaw@``@ys@`sBkAh|@g|@xEn}@s[G"),
    new Journey(329632594, [], "oo~uGzvsdVUlyAzFwFv@fELno@|m@zCFzWxRv@h@ta@tT@rBaOnf@j@xCjOlrCr@bPwKdP|MhDzSbJbFlPp`@Ub\~@cMdEho@nHvVvPhlAzJxL~\lAnm@`kApw@`bAzg@`iAl[be@`QzJpk@rKfdAcI~CjOh`AxB|Br~@`l@jAdBpy@v[dZlPtlAdAxc@xKzR`Sdp@nH~~@lPna@xW~NpHvShJ~EjC~fAtGhP~SdNrG~o@g@nMzYt`@lP``@fs@nEG_FcLr@cA{NyL}Dxz@q`@vBtAwEBlTqBpg@lWzd@nHhw@`bA`NxDbPx\vT~T|pAj_AlEpZf[zU~c@aCp`@{Wrh@iCnd@{Ob_AhR`DiH~PmAre@c]f[pDhAxH}GzS{v@rf@q_@jDaY|RnSnInUiFr\dCzWqKbN~KgNjWcCrPq[h\lC|K{Ejd@pLvbAdRxQlDdV|ThFtKv`@jAp\{DnRnHnIbJcM~LhJnJzV`CbYpNdWi@nUnYdJtFrc@pOs@lGlJl@pQtWJdPxYne@rZCb]jIlOpAfNtIpBlC`GfFvd@pDfB`Ad_@`Mve@fDfo@fa@jaAjFr^dt@p|@jf@vLzM~M|e@nFm@rNxCzB"),
    new Journey(329633344, [], "_ttsG~wzeVrDqOb`@zKlAk^j^eSrHdMmT|a@dcAuc@xJpPxJ}e@tEt@_EpZhErOaJtRrJjJ}Db`@pKuBe@`SrQrg@}CvNgXhGqDbNp\pLvF`[kRz`Bxb@X_b@cDgDzVpStvAsScnAdCsd@xQvBgP`@YcJzRmqBhOeLfv@vDp`@{~@|C}}@f^k@z[vVx[|At_DkdAnJcKfEi^|RaLta@~X|l@y\|~AfGbhBk}@~]cgAtcAmFfQ{UwK~n@~u@hf@djAgO`ThLn|@d|AteAb\lg@kOh]~^jl@`FrTfZdEtn@pd@p\eHfX{VvRxKfh@sArR~Wpf@le@`[reB~[`^`y@zj@xh@pqAdCdcAbYfk@sRfr@qm@tjAuI~b@ma@lqB|WlIpe@aJbbAjFxfAfSpl@zi@fa@hJva@fpAcJd`@`{@uFv~Ajc@hCzF|LySrd@s`@tHdGlYb[rSyg@fw@vOpZkL`f@yX~@}b@nYicAv@[lVvJfIb[~@n`Btp@xReGvRa\dqAbPfbEpBpk@zMbeAob@|Kw]b\vS~c@sEpc@kYjj@agAl^iR`rAppArsA`E~i@p|@d}AaZbXyUpTuh@iCvpAta@nm@fHr{@zWve@b@p`A`jAroEIpk@kRpm@mFvtAxAhQb_@r]lFh]~OhRoTbqCo\bsAp^xvCzw@zyA_DjbAvj@`aBg@rm@loAdnB@rWvb@dsAp_@fh@ld@bQ"),
    new Journey(330410022, [], "gm`pGtvphVx`@aXxQ}bAxxA{vBhq@owCvXc}BfSwf@Ygn@h[ehArYqQdIagA_Q}c@uEiy@fPck@yDmj@|CeV{LkVt@oa@sTaz@vGqn@bFeGzg@oKbdA}v@n_AyXvt@yh@hwAaf@rd@o^||Bzw@x`AvsA|\pQve@zgA|p@vb@ty@jK|HtQ~Dru@n[j[rr@gFnn@w`@tf@z@`VzKnmB_KbWdDl`@fZbmB|Yf_AiKbn@{x@~b@uGni@i~@di@uLzjBm~@v[o_AvGasA~V_oBpRcJ|LqUkCeeBrEco@yOwfCnHqFpOpRt\lC|NuMdCyQwKqe@qZmvC~Nm~@iOikAzMobBgEuWlBkXv\}_Bt@a_Bgz@kqEcAu`AiHup@pqEexE~wAy`Cpu@_xDtQc_@znMelKoFma@z\eAs@iU~Eq@|@aZ|Rc_@ts@yfCbbBmdAh}AclCrTos@hq@}g@xoAiyCnl@igCp~Bq{C?s_B}Tc[Esy@_Hk^~BoRta@kj@uEe`@h@q|CleEm@jPjK~U_I`O`Yl^bP~YJ|I|O~Tv@lNqQv_@mDd\zH^vKiAcKdIvAvCyHdBmUkFeHdGiIlhA_c@fSn@rs@sg@fc@`Khb@wWtjAa^|`A`GbA`PxWxAh`@`d@uAdg@lKzN~LoE")
];

function instagramUrl(id, requestedWidth: number): string {
    var size = 'l';
    if (requestedWidth <= 320) {
        size = 'm'
    }

    return `https://www.instagram.com/p/${id}/media?size=${size}`
}

function mapboxStaticMap(arg: string): string {
    return `https://api.mapbox.com/v4/stravalr.lo8l8hlh/${arg}?access_token=${mapboxAccessToken}`
}

function mapboxMapSize(height: number, width: number): string {
    return `${height}x${width}`
}

class FullPageManager {
    private docHeight: number;
    private docWidth: number;

    firstPage = new FirstPage();
    lastPage = new LastPage();

    constructor(docHeight: number, docWidth: number) {
        this.docHeight = docHeight;
        this.docWidth = docWidth;
    }

    render(): string {
        return `
            ${this.firstPage.render()}
            ${this.pages().map(function(p) {return p.render()} ).join('')}
            ${this.lastPage.render()}
            `
    }

    documentWidth(): number {
        return this.docWidth
    }

    documentHeight(): number {
        return this.docHeight
    }

    dynamicSection(): Section {
        var that = this;

        var slides: string = journeys.map(function(j) {
            return `<div class="slide"><img src="${mapboxStaticMap(`path-5+f44+f44(${encodeURIComponent(j.encodedPolyline)})/auto/${mapboxMapSize(that.documentWidth(), that.documentHeight())}.png`)}" width="${that.documentWidth()}" height="${that.documentHeight()}" /></div>`;
        }).join('');

        return new Section(`<div class="section active">${slides}</div>`);
    }

    pages(): Array<Section> {
        return [
            this.dynamicSection(),
            new Section(
            `<div class="section active">
              <div class="slide">
                <img src="${instagramUrl('4QqH_uxRLf', this.documentWidth())}" width="${this.documentWidth()}" />
              </div>
              <div class="slide">
                <img src="${mapboxStaticMap(`path-5+f44+f44(acreF%60m%60jV%60A%60Dq%60@sh@eEeHH_DwJl@%7D~AzvAcJzMeGfP~G%60eA%7DCbH%60Cd%5E_CtEeG%60DEnEdDjItIrCjCjFuAdDOpMsFrKfRnoC%60CbHuC%60h@hFkC%7COt@~ApAMxEbCvAnBQbCkGhGjHrFKJuBiGqMDmEjFcFzAiHhIgFnD%7DNpIk@~D%60De@oKbDw@WqHxCm@oAgSlDk@%7BCqf@lIkA)/auto/${mapboxMapSize(this.documentWidth(), this.documentHeight())}.png`)}" width="${this.documentWidth()}" height="627" />
              </div>
              <div class="slide"><img src="${instagramUrl('34rI74xRFj', this.documentWidth())}" width="${this.documentWidth()}" /></div>
            </div>`),
            new Section(`
            <div class="section">
              <div class="slide">
                <img src="${mapboxStaticMap(`path-5+f44+f44(kumwFrjvbMaf%40kuD%7BnCkS)/auto/${mapboxMapSize(this.documentWidth(), this.documentHeight())}.png`)}" width=${this.documentWidth()}" height="627" />
              </div>
              <div class="slide">
                <img src="${instagramUrl('4IZpIZRRHi', this.documentWidth())}" width="${this.documentWidth()}" />
              </div>
              <div class="slide">
                <img src="${instagramUrl('371ql4RRC1', this.documentWidth())}" width="${this.documentWidth()}" />
              </div>
            </div>`)
        ]
    }

    initPlugin(): any {
        $('#fullpage').fullpage({
            loopHorizontal: false,
            slidesNavigation: true,
            verticalCentered: false
        });
    }
}

class Section {
    el: string;

    constructor(el: string) {
        this.el = el;
    }

    render(): string {
        return this.el;
    }
}

class FirstPage extends Section {
    constructor() {
        super('')
    }

    render(): string {
        return `
        <div id="settings" class="section">
            <div id="settingsContent">
                <img class="labslogo" src="images/strava-labs-logo.png" />
            </div>
        </div>`
    }
}

class LastPage extends Section {
    constructor() {
        super('')
    }

    render(): string {
        return `
        <div id="end" class="section">
          <div id="endContent">
            <h1>What will you discover next?</h1>
            <h2>Come back tomorrow at 10am ET to explore more.</h2>
            <img class="labslogo" src="images/strava-labs-logo.png" />
          </div>
        </div>`
    }
}

$(function() {
    var docHeight = $(document).height();
    var docWidth = $(document).width();

    var pageManager = new FullPageManager(docHeight, docWidth);
    $('#fullpage').html(pageManager.render());
    pageManager.initPlugin();

    setTimeout(function() {
        $('#loader').fadeOut(1000);
    }, 1500);
});
