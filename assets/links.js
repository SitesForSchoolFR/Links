// Adicione endereços (um por linha) aos grupos abaixo. Links sem protocolo usam HTTPS.
const LINK_GROUPS = [
{ category:'Jogos', name:'Eaglercraft', links:`eaglercraft.com
eaglercraft.is
eaglercraft.club` },
{ category:'Jogos', name:'Super Mario 64', links:`https://2pu896.csb.app` },
{ category:'Jogos', name:'SDK', links:`floatingboatinthesky.github.io/LuminSDK` },
{ category:'Jogos', name:'GTA', links:`fiveplay.lol
https://v2.fiveplay.lol/launcher.html` },
{ category:'Jogos', name:'Subway Surfers', links:`tavvkkj.xyz/venice/original` },
{ category:'Jogos', name:'Mantle', links:`https://mantle-menu.pages.dev
https://mantle-menu.mantleunblocked.workers.dev
https://sites.google.com/view/mantle-menu
https://getmantle.pages.dev` },
{ category:'Jogos', name:'Frogies Arcade', links:`software.freedom-tw.com
bull.gcranjit.com.np
gg-bull-ck.jashish.com.np
bull.better.than.frogie.stockfun.net
2is.beamschoolsofeducation.cfd/
xgc.beamschoolsofeducation.cfd/` },
{ category:'Jogos', name:'Duck Math', links:`cdn.jsdelivr.net/gh/freezenovasrl/cdn/duckmath.svg
assets.editor.p5js.org/69f34707e1b8c4295655b517/6e528b37-2c24-457c-b1de-8b0964eacd2f.svg
assets.editor.p5js.org/69f34707e1b8c4295655b517/e3a9881e-d76a-41f5-94bf-6df6bcea5ec2.svg
fastly.jsdelivr.net/npm/classroomduck/index.svg
ck8.beamschoolsofeducation.cfd
rql.beamschoolsofeducation.cfd
j4c.beamschoolsofeducation.cfd
bull.stockfun.net
dsf.stockfun.net
njbkr.stockfun.net` },
{ category:'Jogos', name:'GN-Math', links:`https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/study-calculus-21-di3sir.html
https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/practice-geometry-2-53t910.html
https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/practice-equation-6-3z7tqa.html
https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/study-fraction-17-83lago.html
https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/practice-equation-18-bsmud0.html
https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/practice-geometry-14-75irnr.html
https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/practice-geometry-8-f3tzjo.html
https://raw.esm.sh/gh/Why2ITry/gn-math-links-2-1@38eb5c5c9a62b0be2391fcd8f459ecbd47d855b1/study-fraction-5-9b7ff5.html` },
{ category:'Jogos', name:'GN-Math V2', links:`originfastly.jsdelivr.net/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
testingcf.jsdelivr.net/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
jsdelivr.b-cdn.net/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
jsd.onmicrosoft.cn/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
cdn.staticdelivr.com/gh/Sloth648/caverned-spooky-wraith/main/a2.svg
cdn.jsdmirror.com/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
cdn.statically.io/gh/Sloth648/caverned-spooky-wraith/main/a2.svg
esm.sh/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
education.sesaech.gob.mx
education.pound4poundmma.ca
cdn.jsdelivr.net/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
quantil.jsdelivr.net/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
gcore.jsdelivr.net/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
fastly.jsdelivr.net/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
esm.sh/gh/Sloth648/caverned-spooky-wraith@main/a2.svg?raw
raw.esm.sh/gh/Sloth648/caverned-spooky-wraith@main/a2.svg
raw.githack.com/Sloth648/caverned-spooky-wraith/main/a2.svg
rawcdn.githack.com/Sloth648/caverned-spooky-wraith/main/a2.svg
raw.githubusercontent.com/Sloth648/caverned-spooky-wraith/main/a2.svg
githubraw.com/Sloth648/caverned-spooky-wraith/main/a2.svg` },
{ category:'Estudos', name:'Petezah', links:`choperascabodefrio.com.ar
bilgi.cyou
bioskopkeren.bond
bobevanslistenssmg.cfd
boywho.cyou
buctic.cfd
businessjobs.info
businessschool.cc
cafergot.sbs
cdnpro.cyou
cials.cfd/
cillin.cfd
chill.geo-sistemas.com.ar
math.horan.id.au
ask-her-out.lakeballs.fi
oh.laundry.com.ar
mwah.nerdandfood.com` },
{ category:'Estudos', name:'Aurora', links:`aurora.mysaol.com
aurora.dialogsibir.ru
aurora.hornburst.com
auroa.govt.hu
aurora.mysanctuary.org
aurora.oligra.com.ar
uro.webconstructions.co.uk
uro.kpores.ru
aurora.yowie.me
aurora.zubex.net
aurora.xzolx.org
aurora.trustpty.com
aurora.rublconxray.com
http://aurora.elysiumeco.net` },
{ category:'Estudos', name:'Galaxy V7', links:`glxy.b-cdn.net/
hope.onlyforscholarship.online/
k-12.kwgranitecountertops.com/
math-tutoring.streetdirectory.sg/` },
{ category:'Estudos', name:'Revault', links:`learninghelp.edu.pulsaudio.ro/
ddfg.pulsaudio.ro/
wefr.pulsaudio.ro/
grammer.learning.geometry.math.pulsaudio.ro/
timetodomymagic.thefilmdatabase.com/
learning.clever.nondestructivetesting.ca/
ixl.edu.nondestructivetesting.ca/
superlearning.edu.streetdirectory.sg/
cleverlearning.edu.nextcomm.com.ar/
government.usa.gov.gov.nextcomm.com.ar/
imps.rusticrivergear.com/
newstudyguied.rusticrivergear.com/
xyalora.rusticrivergear.com/
cleverlearning.org.edu.sanjayparajuli.com.np/
educational.edu.sanjayparajuli.com.np/
supermath.org.sanjayparajuli.com.np/
bullbestyoutuber.solidaritysafaris.com
w.to.bull.solidaritysafaris.com
learninghelp.c-abogados.com.ar/
clever.ixl.learning.gov.nextcomm.com.ar/
megalearning.nextcomm.com.ar/
revault.nextcomm.com.ar/
learninghelp.gmk.cl/
learninghelp.n43.pw/
learninghelp.lakeballs.fi/
learninghelp.truefruit.tw/
learninghelp.edu.truefruit.tw/
learninghelp.sanjayparajuli.com.np/
learninghelp.alte.ca/
learninghelp.mindboggle.us/
learninghelp.tribeoftwo.com/
didyoumissme.dila.cl/
theynotlikeus.dila.cl/
imback.nextcomm.com.ar/
learninghelp.nextcomm.com.ar/
mathhelp.metropolitanstaffingsolutions.com
promo.rusticrivergear.com
supermath.org.rusticrivergear.com
w.bull.rusticrivergear.com
bull.da.goat.ngl.streetdirectory.sg
bull.promo.streetdirectory.sg
flexing.streetdirectory.sg
I.am.learning.streetdirectory.sg
megaultralearning.streetdirectory.sg` },
{ category:'Estudos', name:'Solara', links:`solara.sunrise.org.uk
best.rigaprecast.com.au
she.langebro.com
news.misem.or.id
sola.fasoclash.com
solara.dialogsibir.ru
solra.govt.hu
solara.mysanctuary.org
solara.oligra.com.ar
solara.polimont.com.br
slo.whenagentsrule.org
slo.saintpauljinju.com
las.webconstructions.co.uk
las.kpores.ru
d2stkrd586kxhh.cloudfront.net
solara.zubex.net
solara.xzolx.org
dylanmc.site/
gnyy.plan-ted.com/
zfmx.prosysaudit.ro/
mukq.getfounddsos.net/
nrnmj.plan-ted.com/
rul.prosysaudit.ro/
dci.scottbaptist.com/
jugj.scottbaptist.com/
off.scottbaptist.com/
voddz.scottbaptist.com/
pjprs.scottbaptist.com/
olaraos.s3.amazonaws.com/index.html
s3.amazonaws.com/solaraos/index.html
solara.trustpty.com
solara.rublconxray.com
s3.amazonaws.com/studycove/index.svg
studycove.s3.amazonaws.com/index.svg
http://solara.elysiumeco.net
http://quizharbor.s3.amazonaws.com/index.svg
http://quizharbor.s3.us-east-1.amazonaws.com/index.svg
http://s3.amazonaws.com/quizharbor/index.svg
http://s3.us-east-1.amazonaws.com/quizharbor/index.svg
http://d352b4vzc2msxr.cloudfront.net/index.svg` },
{ category:'Estudos', name:'Astra', links:`sixseven.chanka.com
astra-bull.noble-house.tk
animals.solidaritysafaris.com
bull.solidaritysafaris.com
info.veranda.co.id
tra.ipdz.com/
astra-education.top/
cdn.jsdelivr.net/gh/dragonx-astra/astra-svg@latest/logo.svg#
oqyo.corea.is
ryym.corea.is
svoe.corea.is
dvkfb.corea.is
nxxzx.corea.is
astra.apexflightacademy.com/` },
{ category:'Estudos', name:'Opium', links:`https://opium.best/
https://cdn.jsdelivr.net/gh/OpiumBest/svg/icon.svg
https://s3.amazonaws.com/opiumbest/study
https://opiumbest.s3.amazonaws.com/study
https://storage.googleapis.com/opiumbest/study.html
https://opiumbest.storage.googleapis.com/study.html
https://cdn.statically.io/gh/OpiumBest/svg@main/icon.svg
https://opiumbest.github.io/
https://jsdelivr.b-cdn.net/gh/OpiumBest/svg/icon.svg
http://esm.sh/gh/OpiumBest/svg/icon.svg?raw
https://s3.amazonaws.com/cleverlearning/study
https://cleverlearning.s3.amazonaws.com/study
https://storage.googleapis.com/gclassroom/study.html
https://gclassroom.storage.googleapis.com/study.html
https://s3.amazonaws.com/opiumbull/study
https://storage.googleapis.com/opiumbull/study.html
https://cdn.jsdelivr.net/gh/opiumbest/bull33/icon.svg
http://esm.sh/gh/OpiumBest/bull33/icon.svg?raw
https://cdn.statically.io/gh/OpiumBest/bull33@main/icon.svg
https://opiumbull.s3.amazonaws.com/study
https://d2460bmcqrol01.cloudfront.net/
https://notopm.d2otav0547hwz0.amplifyapp.com/` },
{ category:'Estudos', name:'Tung Tung', links:`dd1hfh01dlqgu.cloudfront.net/
d2zobue1t3ey6b.cloudfront.net/
s3.amazonaws.com/tungnotes/index.html
s3.amazonaws.com/cedarstudy/index.html
tung.zubex.net
tung.xzolx.org
s3.amazonaws.com/vbzatuq/index.html
vbzatuq.s3.amazonaws.com/index.html
d12whv3rc86mrm.cloudfront.net
https://de65f25rwcp70.cloudfront.net/
tungtung.trustpty.com
tungtung.rublconxray.com
https://tungtung.beauty
https://tungtung.top
http://tungtung.elysiumeco.net
http://s3.amazonaws.com/pinepractice/index.html
http://s3.us-east-1.amazonaws.com/pinepractice/index.html
http://s3-external-1.amazonaws.com/pinepractice/index.html
http://pinepractice.s3.amazonaws.com/index.html` },
{ category:'Estudos', name:'StudyHub', links:`dt7z8lnu7fv0r.cloudfront.net/
lumivex.s3.amazonaws.com/index.html
studyhub.trustpty.com
studyhub.rublconxray.com
shub.zubex.net
shub.xzolx.org
http://studyhub.elysiumeco.net
http://dzbjxct0c9fxq.cloudfront.net/
http://brightdesk.s3.us-east-1.amazonaws.com/index.html
http://s3.amazonaws.com/brightdesk/index.html
http://brightdesk.s3.amazonaws.com/index.html` },
{ category:'Filmes e séries', name:'Cinera', links:`cinera.zubex.net
cinera.yowie.me
cinera.zarins.eu
cinera.xzolx.org
cin.rublconxray.com
cinera.trustpty.com` },
{ category:'Filmes e séries', name:'Triple T HD', links:`triplet.zubex.net
triplet.xzolx.org
triplethd.trustpty.com
triplethd.rublconxray.com
http://triplethd.elysiumeco.net` },
];

LINK_GROUPS.push(
{category:'Jogos',name:'P2P',links:`script.google.com/macros/s/AKfycbw3KzPix7iLtyJFB7eVqm2NCWhRoqSl0G38p7YeJm6KEHlETcuc-8jVnom69pUcwQUk/exec?id=HVLL6YBBC5
script.google.com/macros/s/AKfycbw3KzPix7iLtyJFB7eVqm2NCWhRoqSl0G38p7YeJm6KEHlETcuc-8jVnom69pUcwQUk/exec?id=V9KM79NFHC
script.google.com/macros/s/AKfycbw3KzPix7iLtyJFB7eVqm2NCWhRoqSl0G38p7YeJm6KEHlETcuc-8jVnom69pUcwQUk/exec?id=J4JXSS9W3N
script.google.com/macros/s/AKfycbw3KzPix7iLtyJFB7eVqm2NCWhRoqSl0G38p7YeJm6KEHlETcuc-8jVnom69pUcwQUk/exec?id=GEMXRNAA6W
script.google.com/macros/s/AKfycbw3KzPix7iLtyJFB7eVqm2NCWhRoqSl0G38p7YeJm6KEHlETcuc-8jVnom69pUcwQUk/exec?id=HUZSGDFGGP`},
{category:'Estudos',name:'Refract',links:`s3.us-east-2.amazonaws.com/bravemarble93/index.html
s3.us-east-2.amazonaws.com/roughpebble80/index.html
s3.us-east-2.amazonaws.com/cozypillow45/index.html
s3.us-east-2.amazonaws.com/luckypebble87/index.html
s3.us-east-2.amazonaws.com/fancymaple62/index.html
s3.us-east-2.amazonaws.com/boldmuffin94/index.html
s3.us-east-2.amazonaws.com/cozymaple26/index.html
s3.us-east-2.amazonaws.com/dustylemon10/index.html`},
{category:'Estudos',name:'Astral',links:`storage.googleapis.com/passedtest/index.html
storage.googleapis.com/proxylol/index.html
storage.googleapis.com/psatpractice/index.html
storage.googleapis.com/studyharder/index.html
storage.googleapis.com/studyk12/index.html
storage.googleapis.com/underratedproxy/index.html
storage.googleapis.com/upperlevel/index.html
storage.googleapis.com/buldakramen/index.html
storage.googleapis.com/twentyfivelol/index.html
a.woodvilleweather.com
b.woodvilleweather.com
g1.explomillacura.cl`},
{category:'Mais links',name:'Bagatz Pack',links:`https://achcroma.bagatz.com/
https://bull-33.bagatz.com/
https://edu-rocks.bagatz.com/
https://luna.bagatz.com/
https://void.bagatz.com/
https://lunaris.bagatz.com/
https://re-vault.bagatz.com/`},
{category:'Mais links',name:'Space',links:`space.trustpty.com
space.rublconxray.com
http://space.elysiumeco.net`},
{category:'Mais links',name:'Lunar',links:`lunar.rublconxray.com
lunar.trustpty.com`},
{category:'Mais links',name:'Rook',links:`d1lm38j3y7voha.cloudfront.net
d8eyjoox1mb9w.cloudfront.net
rook.zdertis.net
rook.zarins.eu
rook.trustpty.com
rook.rublconxray.com
https://d3v9i36n9qwn0t.cloudfront.net/
http://rook.proasist.cl
http://s3.amazonaws.com/rooklearn/index.svg
http://s3.us-east-1.amazonaws.com/rooklearn/index.svg
http://rooklearn.s3.amazonaws.com/index.svg
http://rooklearn.s3.us-east-1.amazonaws.com/index.svg`},
{category:'Mais links',name:'N7x',links:`s3.amazonaws.com/history-classroom/index.html
d329oui0a76my.cloudfront.net/
nyxlearning.plan-ted.com/
mitstudies.hdm1.net/`},
{category:'Mais links',name:'Kite',links:`kite.zubex.net
kite.zarins.eu
kite.xzolx.org
s3.amazonaws.com/kitestudy/index.html
kitestudy.s3.amazonaws.com/index.html
kite.trustpty.com
kite.rublconxray.com
http://kite.elysiumeco.net`},
{category:'Mais links',name:'DogeUB',links:`doge.zubex.net
doge.zdertis.net
doge.zarins.eu
doge.yowie.me
doge.xzolx.org
dogeub.trustpty.com
dogeub.rublconxray.com
http://dogeub.elysiumeco.net`},
{category:'Mais links',name:'Flight Academy Pack',links:`galaxy.apexflightacademy.com
imp-v2.apexflightacademy.com
triple-t-hd.apexflightacademy.com
tungtung.apexflightacademy.com
zaka.apexflightacademy.com
solara.apexflightacademy.com
space.apexflightacademy.com
study-hub.apexflightacademy.com
truffled.apexflightacademy.com
xylora.apexflightacademy.com
astra.apexflightacademy.com
aurora.apexflightacademy.com
cheesy.apexflightacademy.com
ink.apexflightacademy.com
krypton.apexflightacademy.com
ather.apexflightacademy.com
j-m-w.apexflightacademy.com
luna.apexflightacademy.com
other.apexflightacademy.com
re-vault.apexflightacademy.com
celo-ai.apexflightacademy.com
classroom-spot.apexflightacademy.com
duck.apexflightacademy.com
equinox.apexflightacademy.com
seletine.apexflightacademy.com
bull-33.apexflightacademy.com
c00lkid.apexflightacademy.com
mono-math.apexflightacademy.com
nexus.apexflightacademy.com
void.apexflightacademy.com
desync.apexflightacademy.com
edu-rocks.apexflightacademy.com
flare.apexflightacademy.com
interstellar.apexflightacademy.com
reds.apexflightacademy.com`},
{category:'Mais links',name:'C00lKid',links:`https://c00lkid.ansoft.cl/
https://c00lkid.armeniaincentives.com/
https://c00lkid.majoitus.ee/
https://c00lkid.rigaprecast.com/
https://c00lkid.starnightimport.com/
http://c00lkid.hosteriafutaleufu.cl/
http://c00lkid.hotel-am-brillantengrund.at/
http://c00lkid.manoahinvest.com/
http://c00lkid.rednutricional.cl/
http://c00lkid.scarboroughgymelites.ca/
https://c00lkidtechh.eglobaltravelmedia.asia/
https://c00lkid.belyfit.cl/
https://c00lkid.sunil7.com.np/
https://c00lkid.eglobaltravelmedia.asia/`},
{category:'Mais links',name:'Glim',links:`sz1n.s3.amazonaws.com/index.html
s3.amazonaws.com/axk4/index.html
http://deskloft.s3.us-east-1.amazonaws.com/index.html
http://deskloft.s3.amazonaws.com/index.html
http://s3.amazonaws.com/deskloft/index.html`},
{category:'Mais links',name:'Interstellar',links:`interstellar.zubex.net
interstellar.zarins.eu
interstellar.xzolx.org
zzqf.z19.web.core.windows.net
gnd9.z13.web.core.windows.net
interstellar.trustpty.com
interstellar.rublconxray.com
http://interstellar.elysiumeco.net`},
{category:'Mais links',name:'Velara',links:`uva.jashish.com.np
yigim.jashish.com.np
uavar.jashish.com.np
agj.jashish.com.np
xwxh.jashish.com.np
sci.beamschoolsofeducation.cfd/
aag.beamschoolsofeducation.cfd/`},
{category:'Mais links',name:'Utopia',links:`utopia.zubex.net
space.xzolx.org
utopia.trustpty.com
utopia.rublconxray.com`},
{category:'Mais links',name:'Xylora',links:`baseapi.amazingmath.style
woup.woodvilleweather.com
art.pound4poundmma.ca
ah.myk.sh
rdw.myk.sh
appeal.tozsugianto.com
eta.tozsugianto.com
jzxgm.tozsugianto.com
ah.shantifurnishing.com.np
dleqe.shantifurnishing.com.np
amath.drbijaytamang.com.np
blazicmath.com
xylora.devs.surf
wow.sashindo.web.id
wow.pound4poundmma.ca
sea.gcranjit.com.np`},
{category:'Mais links',name:'Cherri',links:`chrisets.s3.us-east-1.amazonaws.com/index.html
s3.amazonaws.com/chrisets/index.html
s3.us-east-1.amazonaws.com/chrisets/index.html
chrisets.s3.us-east-1.amazonaws.com/math.html
s3.amazonaws.com/chrisets/math.html
s3.us-east-1.amazonaws.com/chrisets/math.html
chrisets.s3.amazonaws.com/index.svg
chrisets.s3.us-east-1.amazonaws.com/index.svg
chrisets.s3.dualstack.us-east-1.amazonaws.com/index.svg
s3.us-east-1.amazonaws.com/chrisets/index.svg
s3.us-east-1.amazonaws.com/bullbstlol/math.html
bull.education.corea.is
bullbstlol.s3.dualstack.us-east-1.amazonaws.com/index.svg
angel-im-sorry-daddy.freedom-tw.com
joshua-callahan.veranda.co.id
bullbstlol.s3.us-east-1.amazonaws.com/index.html
moldova.drbijaytamang.com.np
s3.amazonaws.com/bullbstlol/math.html
bull-arena.pound4poundmma.ca
s3.us-east-1.amazonaws.com/bullbstlol/index.svg
bullbstlol.s3.amazonaws.com/index.html
s3.dualstack.us-east-1.amazonaws.com/bullbstlol/index.html
bullbstlol.s3.us-east-1.amazonaws.com/math.html
bullbstlol.s3.amazonaws.com/index.svg
s3.us-east-1.amazonaws.com/bullbstlol/index.html
bullbstlol.s3.dualstack.us-east-1.amazonaws.com/index.html
bullbstlol.s3.us-east-1.amazonaws.com/index.svg`},
{category:'Mais links',name:'Stroberri',links:`stroberri.zubex.net
stroberri.xzolx.org
s3.amazonaws.com/strawberrii/index.svg
s3.amazonaws.com/strawberrii/index.html
stroberri.trustpty.com
stroberri.rublconxray.com
https://d3ff66h1gfilcx.cloudfront.net
http://strobi.elysiumeco.net
http://strawberrii.s3.amazonaws.com/index.svg
http://strawberrii.s3.amazonaws.com/index.html`},
{category:'Mais links',name:'Galaxy',links:`main.elor.site
books.securewebhosting.site
naytd.woodvilleweather.com
daniel-quezada.corea.is
beta.7dejunio.com.ar/
online.cjournal.ir/
edge.sunil7.com.np/
signin.truefruit.tw/
uploads.ilogica-soluciones.cl/
dev.maryadafoundation.org.np/
docs.sunil7.com.np/
host.dentist4you.com.au/
blog.i-umix.com.ar/`},
{category:'Mais links',name:'Flver',links:`flver.trustpty.com
flver.rublconxray.com
http://flver.elysiumeco.net`},
{category:'Mais links',name:'Selenite',links:`iceland.is.a.goated.country-bull.corea.is
bull-gives.freedom-tw.com
iwant.freedom-tw.com
ripspeak.thevoiceexchange.com
speak.bull.thevoiceexchange.com
mathworkk-12.proasist.cl/`},
{category:'Mais links',name:'Aether',links:`bedroque.s3.amazonaws.com/index.html
s3.amazonaws.com/bedroque/index.html
bedroque.s3.us-east-1.amazonaws.com/index.html
s3.us-east-1.amazonaws.com/bedroque/index.html
bedroque.s3-fips.us-east-1.amazonaws.com/index.html
aetherbeta.storage.googleapis.com/study.html
aetherinstitution.storage.googleapis.com/study.html
aetherschools.storage.googleapis.com/study.html
apresources.storage.googleapis.com/study.html
apushistory.storage.googleapis.com/study.html
atlantak12.storage.googleapis.com/study.html
niigo.s3.dualstack.us-east-1.amazonaws.com/index.html
s3.dualstack.us-east-1.amazonaws.com/niigo/index.html
niigo.s3.us-east-1.amazonaws.com/index.html
s3.us-east-1.amazonaws.com/niigo/index.html
niigo.s3-fips.us-east-1.amazonaws.com/index.html
niigo.s3-fips.dualstack.us-east-1.amazonaws.com/index.html`},
{category:'Mais links',name:'Voya',links:`voya.zubex.net
voya.xzolx.org
voya.zarins.eu
voya.rublconxray.com
voya.trustpty.com
http://voya.elysiumeco.net`},
{category:'Mais links',name:'Nebulo',links:`loft-kept8.naughtybaptistbrewery.com
page-jail1.naughtybaptistbrewery.co
loaf-tiny8.naughtybaptistbrewery.com
cope7.chompchomp.ca
germ-foil1.chompchomp.ca
side-fins4.chompchomp.ca
tens4.chompchomp.ca
kits7.mesaayuda.net
hang1.manetti.cl
idle-head1.ramos90.ca
dupe-alps5.digresia.com.ar
levy7.swetaadhikari.com.np
duly6.szerelo9.hu
font6.indiaguru.com
rats-hilt3.kinemasot.cl`},
{category:'Mais links',name:'Fern',links:`readingsets.s3.us-east-1.amazonaws.com/index.html
s3.amazonaws.com/readingsets/index.html
s3.us-east-1.amazonaws.com/readingsets/index.html
readingsets.s3.us-east-1.amazonaws.com/math.html
s3.amazonaws.com/readingsets/math.html
readingsets.s3.us-east-1.amazonaws.com/index.svg
readingsets.s3.dualstack.us-east-1.amazonaws.com/index.svg
s3.amazonaws.com/readingsets/index.svg
s3.us-east-1.amazonaws.com/readingsets/index.svg
talkloud.thevoiceexchange.com
s3.dualstack.us-east-1.amazonaws.com/bullchri/index.html
detect.corea.is
s3.amazonaws.com/bullchri/math.html
bullchri.s3.dualstack.us-east-1.amazonaws.com/index.html
no-delay.scottbaptist.com
s3.us-east-1.amazonaws.com/bullchri/index.svg
bull-fun.stockfun.net
bullchri.s3.dualstack.us-east-1.amazonaws.com/math.html
yeah.gcranjit.com.np
bullchri.s3.us-east-1.amazonaws.com/index.html
s3.dualstack.us-east-1.amazonaws.com/bullchri/index.svg
bullchri.s3.amazonaws.com/math.html
s3.us-east-1.amazonaws.com/bullchri/index.html
bullchri.s3.dualstack.us-east-1.amazonaws.com/index.svg
s3.us-east-1.amazonaws.com/bullchri/math.html
bullchri.s3.us-east-1.amazonaws.com/index.svg`}
);
// Variações de hospedagem fornecidas para o grupo Fern.
for (const bucket of ['cmathhub2', 'mathhub2']) {
  const group = LINK_GROUPS.find(g => g.name === 'Fern');
  for (const file of ['index.html', 'math.html', 'index.svg']) {
    for (const host of [`${bucket}.s3.amazonaws.com`, `${bucket}.s3.us-east-1.amazonaws.com`, `${bucket}.s3.dualstack.us-east-1.amazonaws.com`, `s3.amazonaws.com/${bucket}`, `s3.us-east-1.amazonaws.com/${bucket}`, `s3.dualstack.us-east-1.amazonaws.com/${bucket}`]) group.links += `\n${host}/${file}`;
  }
}
LINK_GROUPS.push(
{category:'Mais links',name:'CDN Pack',links:`https://cdn.esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdeliver.us/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.jsdeliver.us/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdelivr.net.cn/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.jsdelivr.net.cn/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdelivr.net/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.jsdelivr.net/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdmirror.com/gh/task4z/classroom-15x/files/catclass/index.svg
https://cdn.jsdmirror.com/gh/task4z/classroom-15x/files/catclass/logo.svg
https://cdn.statically.io/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.statically.io/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.staticdelivr.com/gh/task4z/classroom-15x/9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.staticdelivr.com/gh/task4z/classroom-15x/9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg`},
{category:'Mais links',name:'Mais descobertas',links:`https://bull-33.belyfit.cl/
https://edu-rocks.eglobaltravelmedia.asia/
https://edu-rocks.sunil7.com.np/
https://edu-rocks.belyfit.cl/
https://ddidd.eglobaltravelmedia.asia/
https://oooooo.eglobaltravelmedia.asia/
http://bull-33.cobos.mx/
http://tglsc.cobos.mx/
http://tglsc.starnightimport.com/
http://tglsc.thefilmdatabase.com/
http://tglsc-is-back.tribeoftwo.com/
http://bromine.solidaritysafaris.com/
http://galaxy.solidaritysafaris.com/
http://luna-s.solidaritysafaris.com/
http://tglsc.solidaritysafaris.com/
http://void.solidaritysafaris.com/
https://achcroma.voudouris.org/
https://c00lkid.voudouris.org/
https://edu-rocks.voudouris.org/
https://luna.voudouris.org/
https://void.voudouris.org/
http://bull-33.olneybaptist.org/
http://duck.olneybaptist.org/
http://nexus.olneybaptist.org/
http://reds.olneybaptist.org/
http://void.olneybaptist.org/
https://axiom.lirr.space/
https://bull-33.lirr.space/
https://catclass.lirr.space/
https://revault.lirr.space/
https://study-tutors.lirr.space/
https://ather.lirr.space/
https://duck.lirr.space/
https://galaxy.lirr.space/
https://solara.lirr.space/
https://xylora.lirr.space/
https://achcroma.latinliturgy.com/
https://c00lkid.latinliturgy.com/
https://duck.latinliturgy.com/
https://galaxy.latinliturgy.com/
https://void.latinliturgy.com/
https://arch.nothingbox.net/
https://edu-rocks.nothingbox.net/
https://luna.nothingbox.net/
https://zodiac.nothingbox.net/
https://bull-33.lakeballs.fi/
https://duck.lakeballs.fi/
https://edu-rocks.lakeballs.fi/
https://flare.lakeballs.fi/
https://void.lakeballs.fi/
https://aerggre.tribeoftwo.com/
https://edu-rockss.tribeoftwo.com/
https://pokerouges.tribeoftwo.com/
https://rocks-edusssss.tribeoftwo.com/
https://weffe.tribeoftwo.com/
https://6tothe7.solidaritysafaris.com/
https://vex-parts.solidaritysafaris.com/
https://void-edu.solidaritysafaris.com/
https://voidistuff.solidaritysafaris.com/
https://voids.solidaritysafaris.com/
https://duck.tribeoftwo.com/
https://ducking-tard.tribeoftwo.com/
https://duckmath.tribeoftwo.com/
https://ducks.tribeoftwo.com/
https://what-the-duck.tribeoftwo.com/
https://pagelive.space/p/k683joig
https://pagelive.space/p/1b9243cw
http://duck.rave.ar/
http://edu-rocks.rave.ar/
http://luna.rave.ar/
http://revault.rave.ar/
http://void.rave.ar/
https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/mathlearning/o/duckmath.svg
https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/mathlearning/o/index.svg
https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/ilovecherri/o/index.svg
https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/mathlearning/o/singlefile.svg
https://argumentative-essay.1776arms.com/
https://gn-math.1776arms.com/
https://revault.olneybaptist.org/
https://the-outsiders.olneybaptist.org/
https://duck.rigaprecast.com/
https://lanaris.voudouris.org/
https://re-vault.voudouris.org/
https://unpkg.com/username9927282/cherrisvg/index.svg?1
https://cat4z.s3.amazonaws.com/index.html
https://cat4z.s3.us-east-1.amazonaws.com/index.html
https://cat4z.s3-external-1.amazonaws.com/index.html
https://s3.amazonaws.com/cat4z/index.html
https://s3.us-east-1.amazonaws.com/cat4z/index.html
https://s3-external-1.amazonaws.com/cat4z/index.html
https://storage.googleapis.com/cat4z/index.html
https://cat4z.storage.googleapis.com/index.html
https://objectstorage.eu-amsterdam-1.oraclecloud.com/n/axzqmye6oppx/b/cat4z/o/index.html
https://lizz.voudouris.org/
https://cvv.voudouris.org/
https://quuqb.voudouris.org/
https://pffs.voudouris.org/
https://zsu.voudouris.org/
https://h118fb3.chloechu.com/
https://hb29e4f.branzcatarroja.com/
https://hd1fac7.tosochilemat.cl/
https://hb713c4.imobilandconfort.ro/
https://h114a0e.htcengineers.com/
https://hb1ce54.htcengineers.com/
https://box-school98.fukushimastudy.org/
https://dean-mew78.mathmatics.ccwu.cc/
https://haven-learning.dikpalkc.com.np/
https://essay-writing.govt.hu/
https://essay-writing-test.govt.hu/
https://learning-help-edu.edu.metropolitanstaffingsolutions.com/
https://luna.govt.hu/
https://luna.rusticrivergear.com/
https://luna.solidaritysafaris.com/
https://luna.streetdirectory.sg/
https://luna.tribeoftwo.com/
https://luna.champagnewishesandrvdreams.com/
https://luna.cobos.mx/
https://luna.gatewaysuppliers.com.np/
https://luna.lakeballs.fi/
https://luna.thefilmdatabase.com/
https://gytp.z14.web.core.windows.net/
https://gyzu.z13.web.core.windows.net/
https://q9pt.z5.web.core.windows.net/
https://r1bj.z9.web.core.windows.net/
https://jgjw.z19.web.core.windows.net/
https://c3m6.z9.web.core.windows.net/
https://bb4t.z21.web.core.windows.net/
https://ejrg.z1.web.core.windows.net/
https://ur1d.z13.web.core.windows.net/
https://v6lm.z4.web.core.windows.net/
https://disk.bluetoma.to/
https://cakes.touchofpink.ca/
https://flext.ponsfamilylaunch.com/
https://saus.tehspinx.com/
https://client.laspoint.cl/`}
);
// Pacotes repetitivos, mantidos como endereços individuais pesquisáveis.
const extra = LINK_GROUPS.find(g => g.name === 'Mais descobertas');
for (const [prefix, hosts] of Object.entries({doge:['whenagentsrule.org','veterinarianativa.cl','estudioagnetti.com.ar','pizzamonster.org','adcsapem.com.ar'],tung:['veterinarianativa.cl','estudioagnetti.com.ar','pizzamonster.org','adcsapem.com.ar','ponsfamilylaunch.com'],study:['whenagentsrule.org','veterinarianativa.cl','estudioagnetti.com.ar','pizzamonster.org','adcsapem.com.ar'],lur:['whenagentsrule.org','veterinarianativa.cl','estudioagnetti.com.ar','pizzamonster.org','adcsapem.com.ar'],fr:['whenagentsrule.org','veterinarianativa.cl','estudioagnetti.com.ar','adcsapem.com.ar','pizzamonster.org'],kor:['whenagentsrule.org','veterinarianativa.cl','estudioagnetti.com.ar','adcsapem.com.ar','pizzamonster.org']})) for (const host of hosts) extra.links += `\nhttps://${prefix}.${host}/`;
for (const url of ['dogeub.ponsfamilylaunch.com','studyhub.ponsfamilylaunch.com','au.adcsapem.com.ar','au.estudioagnetti.com.ar','au.pizzamonster.org','auroa.ponsfamilylaunch.com','flver.ponsfamilylaunch.com','rook.ponsfamilylaunch.com']) extra.links += `\nhttps://${url}/`;
for (const file of ['xcloud.svg','sigmagames.svg?raw','synapyse.svg','linkmaker.svg','arctic.svg','DuckMath.svg','Deserted.svg','UBZone.svg','PremiumHUB.svg','CoolkidTech.svg','Deserted.svg','chillzone.svg','SeaBean.SVG','cherri.svg','Luminal.svg']) {
 const hosts=['fastly.jsdelivr.net','esm.sh','jsd.onmicrosoft.cn','jsd.onmicrosoft.cn','gcore.jsdelivr.net','testingcf.jsdelivr.net','gcore.jsdelivr.net','cdn.jsdmirror.com','jsd.onmicrosoft.cn','gcore.jsdelivr.net','jsd.onmicrosoft.cn','fastly.jsdelivr.net','cdn.jsdmirror.com','fastly.jsdelivr.net','cdn.jsdmirror.com'];
 // Os dois endereços Deserted usam CDNs diferentes.
 const i = ['xcloud.svg','sigmagames.svg?raw','synapyse.svg','linkmaker.svg','arctic.svg','DuckMath.svg','Deserted.svg','UBZone.svg','PremiumHUB.svg','CoolkidTech.svg','Deserted.svg','chillzone.svg','SeaBean.SVG','cherri.svg','Luminal.svg'].indexOf(file);
 extra.links += `\nhttps://${hosts[i]}/gh/linkgenrator/GameSitesFILES@main/${file}`;
}
extra.links += '\nhttps://jsd.onmicrosoft.cn/gh/linkgenrator/GameSitesFILES@main/Deserted.svg';
for (let i=1;i<=20;i++) extra.links += `\nhttps://cdn.jsdelivr.net/gh/Obamalinkmaker/Ixl-Learing@main/froggies.svg?v=${i}`;
for (let i=2;i<=12;i++) extra.links += `\nhttps://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-${i}.svg`;
for (const version of [1,2]) for (const host of (version === 1 ? ['cdn.jsdelivr.net','fastly.jsdelivr.net','gcore.jsdelivr.net','quantil.jsdelivr.net','jsdelivr.b-cdn.net','originfastly.jsdelivr.net','testingcf.jsdelivr.net','rawcdn.jsdelivr.net'] : ['cdn.jsdelivr.net','fastly.jsdelivr.net','gcore.jsdelivr.net','quantil.jsdelivr.net','jsdelivr.b-cdn.net','originfastly.jsdelivr.net'])) extra.links += `\nhttps://${host}/gh/username9927282/cherrisvg@main/index.svg?${version}`;
extra.links += `
https://esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://fastly.jsdelivr.net/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://s3.us-east-1.amazonaws.com/bullpxbk/index.svg
https://s3.dualstack.us-east-1.amazonaws.com/bullpxbk/index.svg
https://bullpxbk.s3.amazonaws.com/index.html
https://bullpxbk.s3.us-east-1.amazonaws.com/index.html
https://s3.amazonaws.com/bullpxbk/index.html
https://s3.us-east-1.amazonaws.com/bullpxbk/index.html
https://s3.dualstack.us-east-1.amazonaws.com/bullpxbk/index.html
https://bullpxbk.s3.amazonaws.com/logo.svg
https://bullpxbk.s3.us-east-1.amazonaws.com/logo.svg
https://s3.amazonaws.com/bullpxbk/logo.svg
https://s3.us-east-1.amazonaws.com/bullpxbk/logo.svg
https://s3.dualstack.us-east-1.amazonaws.com/bullpxbk/logo.svg
https://bullsobk.s3.amazonaws.com/index.svg
https://bullsobk.s3.us-east-1.amazonaws.com/index.svg
https://s3.amazonaws.com/bullsobk/index.svg
https://s3.us-east-1.amazonaws.com/bullsobk/index.svg
https://s3.dualstack.us-east-1.amazonaws.com/bullsobk/index.svg
https://bullsobk.s3.amazonaws.com/index.html
https://bullsobk.s3.us-east-1.amazonaws.com/index.html
https://s3.amazonaws.com/bullsobk/index.html
https://s3.us-east-1.amazonaws.com/bullsobk/index.html
https://s3.dualstack.us-east-1.amazonaws.com/bullsobk/index.html
https://bullsobk.s3.amazonaws.com/logo.svg
https://bullsobk.s3.us-east-1.amazonaws.com/logo.svg
https://s3.amazonaws.com/bullsobk/logo.svg`;

// Coleções confirmadas para os novos endereços.
LINK_GROUPS.push(
{category:'Mais links',name:'Onyx',links:`http://onyx.elysiumeco.net`},
{category:'Mais links',name:'Sumi',links:`http://sumi.elysiumeco.net
http://s3.amazonaws.com/sumimath/index.html
http://sumimath.s3.amazonaws.com/index.html`},
{category:'Mais links',name:'Boba',links:`http://boba.elysiumeco.net`}
);

// Coleções adicionadas com os nomes informados pelo usuário.
LINK_GROUPS.push(
{category:'Mais links',name:'BrowOS',links:`http://dqfl8ajrzillq.cloudfront.net/
http://browos678.s3.amazonaws.com/index.html
http://browos678.s3-website-us-east-1.amazonaws.com/index.html
http://s3.amazonaws.com/browos678/index.html
http://browos678.s3.amazonaws.com/index.svg
http://browos678.s3-website-us-east-1.amazonaws.com/index.svg
http://s3.amazonaws.com/browos678/index.svg
http://os.daylit.net/
http://cdn.jsdelivr.net/gh/picoskids/browos@v1.0.0/index.svg`},
{category:'Mais links',name:'Zodiac',links:`http://xju.veranda.co.id/
http://bqgyq.veranda.co.id/
http://mfci.veranda.co.id/
http://ysj.veranda.co.id/
http://zlci.corea.is/
http://nqoqk.corea.is/
http://hkjl.corea.is/
http://zodiac.mlr.ar/
http://sfmqa.mlr.ar/
http://rwly.mlr.ar/
http://dxpfv.mlr.ar/`},
{category:'Mais links',name:'Zaka',links:`http://zakasotuff.s3.us-east-2.amazonaws.com/index.html
http://s3.us-east-2.amazonaws.com/zakasotuff/study
http://zakasotuff.s3.us-east-2.amazonaws.com/index.xml
http://s3.us-east-2.amazonaws.com/zakasotuff/index.xml
http://thepawnshop.s3.us-east-2.amazonaws.com/index.html
http://s3.us-east-2.amazonaws.com/thepawnshop/index.html
http://s3.us-east-2.amazonaws.com/thepawnshop/study
http://thepawnshop.s3.us-east-2.amazonaws.com/index.xml
http://s3.us-east-2.amazonaws.com/thepawnshop/index.xml
http://algebrarelay.s3.us-east-2.amazonaws.com/index.html
http://s3.us-east-2.amazonaws.com/algebrarelay/index.html
http://s3.us-east-2.amazonaws.com/algebrarelay/study
http://algebrarelay.s3.us-east-2.amazonaws.com/index.xml
http://s3.us-east-2.amazonaws.com/algebrarelay/index.xml`}
);

// Endereços separados da lista fornecida; nomes são preservados literalmente.
const additions = {
  Refract: `d65ntvxoot46b.cloudfront.net
dolx69675hbws.cloudfront.net`,
  Sumi: `sumimath.s3.us-east-1.amazonaws.com/index.html
sumimath.s3.amazonaws.com/index.html
sumimath.s3.dualstack.us-east-1.amazonaws.com/index.html
sumimath.s3-fips.us-east-1.amazonaws.com/index.html
sumimath.s3-fips.dualstack.us-east-1.amazonaws.com/index.html
s3.amazonaws.com/sumimath/index.html
s3.us-east-1.amazonaws.com/sumimath/index.html
s3.dualstack.us-east-1.amazonaws.com/sumimath/index.html`,
  StudyHub: `dzbjxct0c9fxq.cloudfront.net/
brightdesk.s3.amazonaws.com/index.html
dt7z8lnu7fv0r.cloudfront.net/
s3.amazonaws.com/brightdesk/index.html
brightdesk.s3.us-east-1.amazonaws.com/index.html
s3.amazonaws.com/vellas/index.html
s3.us-east-1.amazonaws.com/vellas/index.html`,
  Glim: `s3.amazonaws.com/deskloft/index.html
s3.us-east-1.amazonaws.com/deskloft/index.html
s3-external-1.amazonaws.com/deskloft/index.html
sz1n.s3.amazonaws.com/index.html
s3.amazonaws.com/axk4/index.html
deskloft.s3.amazonaws.com/index.html`,
  Onyx: `s3.amazonaws.com/onyxstudy/index.html
onyxstudy.s3.amazonaws.com/index.html
s3.us-east-1.amazonaws.com/onyxstudy/index.html
onyxstudy.s3.us-east-1.amazonaws.com/index.html`,
  Lunar: `s3.amazonaws.com/fernprep/index.html
s3.us-east-1.amazonaws.com/fernprep/index.html
s3-external-1.amazonaws.com/fernprep/index.html
fernprep.s3.amazonaws.com/index.html
fernprep.s3.us-east-1.amazonaws.com/index.html`,
  SolaraOS: `s3.amazonaws.com/quizharbor/index.svg
s3.us-east-1.amazonaws.com/quizharbor/index.svg`,
  Strawberri: `d3ff66h1gfilcx.cloudfront.net
d27kls5vqpzzgb.cloudfront.net`,
  Steobrrii: `s3.amazonaws.com/strawberrii/index.html`,
  Rook: `s3.amazonaws.com/rookclass/index.html
d3v9i36n9qwn0t.cloudfront.net/
rookclass.s3.amazonaws.com/index.html
rookclass.s3.amazonaws.com/index.svg`,
  Kite: `s3.amazonaws.com/kitestudy/index.html
kitestudy.s3.amazonaws.com/index.html`,
  TungTung: `s3.amazonaws.com/vbzatuq/index.html
vbzatuq.s3.amazonaws.com/index.html
d12whv3rc86mrm.cloudfront.net
tungtung.beauty
tungtung.top`,
  Interstellar: `zzqf.z19.web.core.windows.net/
gnd9.z13.web.core.windows.net/`,
  Solara: `solaraos.s3.amazonaws.com/index.html
s3.amazonaws.com/solaraos/index.html
quizharbor.s3.amazonaws.com/index.svg
s3.amazonaws.com/quizharbor/index.svg`,
  Rammerhead: `rammer.nana.englishrealm.ca/
rammer.nana.spoofomatic.com/
omg.wtf.ham.gd/`,
  Desync: `cdn.jsdelivr.net/gh/omaristhefunny/desynctutorsyou@graphing/index.svg`,
  Aether: `jensenresigned.nyc3.digitaloceanspaces.com/index.html
nyc3.digitaloceanspaces.com/jensenresigned/index.html`,
  Cherri: `saugatrcherri-qkyv.totallytutor.co.za/
cherri.nwmteducationalcoop.org/
yean.atlantapubliceducation.cfd/
sudden.herbsbynorthdaysimage.ca/
bitter.hotelupgrade.com/
lasting.aussieflagsandflagpoles.com.au/`,
  'TGLSC V5': `cdn.itcode.wiki/`,
  'Galaxy V7': `ulyt.astraltech.org/
vhffj.nm7.cc/
mws.chanka.com/
qxew.jbworks.com/
xy.cardiovillamercedes.com.ar/
xy.claudesteiner.ch/
xy.infis.net.ru/
xy.snapframework.com/
xy.ricas.eu/
xy.isylet.net/
glxy.neator.site/
mpidfhuvsl.raps.net.au/
ltyophgiwz.pkdk-almuhammadi.com/
lobiuoxesd.e-c-h-o.tw/
knxlktugou.whatastupididea.com/
galaxy.nwmteducationalcoop.org/
wow.atlantapubliceducation.cfd/
education.herbsbynorthdaysimage.ca/
backup.hotelupgrade.com/
bigger.aussieflagsandflagpoles.com.au/`,
  Opium: `tinyurl.com/opiumdotbest
opm.d2ftp8cchfyksh.amplifyapp.com/
s3.amazonaws.com/cleverlearning/study
storage.googleapis.com/gclassroom/study.html`,
  Nexora: `nex-velo.up.railway.app/
nex-velo.vercel.app/
nex-velo.nexero.workers.dev/`,
  Xylora: `xylora.nwmteducationalcoop.org/
neator.site/
atlantapubliceducation.cfd/
seniorseducation.orbitnetworkss.org/
senior.herbsbynorthdaysimage.ca/
apples.hotelupgrade.com/
kick.aussieflagsandflagpoles.com.au/`,
  'Other Links': `rammer.nana.jonmills.org
mathisfun.ebine-san.com
openai.openchain.pt
rammheadsharks.axsetubal.pt
hiring.phire.ca
homo.fomo.at
duffy.optioflow.com
newjersey.chc.ninja
rammer.nana.null-t.org
rammer.nana.fenix-soft.ru
rammer.nana.die-pichlers.at
saftey-check-info.govt.hu
studyhub.8bit.ca
uytgupokuiy7turydte.9dejulio.gob.ar
uowotitukew.govt.hu
error404.n43.pw
julianis67.artycom.ru
rammer.nana.chacman.ar
rammerhead-nimono.sitaci.com
rammer.nana.shluhi-msk.xyz
rammer.nana.petefield.com
rammer.nana.crnjanski.at
clever.smelly.cc
rc-1207.shiwo.org
rammer.nana.ghettohotels.com
rammer.nana.ext-clinicaavaria.cl
yesssssss.okzk.com
voya.elysiumeco.net
sumi.elysiumeco.net
kite.elysiumeco.net
onyx.elysiumeco.net
dogeub.elysiumeco.net
tungtung.elysiumeco.net
triplethd.elysiumeco.net
strobi.elysiumeco.net
studyhub.elysiumeco.net
boba.elysiumeco.net
space.elysiumeco.net
solara.elysiumeco.net
flver.elysiumeco.net
interstellar.elysiumeco.net
aurora.elysiumeco.net
api.staging.arkonline.org.za
totallynotaciahoneypot.blackbooty.international
webmail.israelmail.motorcycles
rammer.nana.admium.co
rammer.nana.dennford.net
rammer.nana.shiftmath.org
ilove.mikata.ru
rammer-nana.108.181.32.77.traefik.me
rammer.nana.lordmarty.com
rammer.nana.optima2017.cl
rammer-02-nana.108.181.32.77.sslip.io
rammer.nana.feedcube.org
rammer.nana.rkopetzky.at
rammer.nana.neognomon.gr
rammer.nana.tsirepfirm.com
rammer.nana.charbel.cl
scrsa-studysupport.onthewifi.com
rammer.nana.euro-net.ro
rammer.nana.dinamica.ro
mdootuck.precisewarehousing.com
https://sktechproxies.blogspot.com
http://sk-bytes.blogspot.com
http://skeducationyt.blogspot.com/
http://sktechhh.blogspot.com/`
};
for (const [name, text] of Object.entries(additions)) {
  let group = LINK_GROUPS.find(item => item.name === name);
  if (!group) {
    group = { category: 'Mais links', name, links: '' };
    LINK_GROUPS.push(group);
  }
  const destination = value => {
    const stripped = value.replace(/^https?:\/\//i, '');
    const match = stripped.match(/^([^/?#]+)(.*)$/);
    const rest = match[2];
    return match[1].toLowerCase() + (rest.startsWith('/') ? rest : '/' + rest);
  };
  const seen = new Set(group.links.split('\n').filter(Boolean).map(destination));
  const fresh = text.split('\n').filter(link => {
    const key = destination(link);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  group.links = [group.links, ...fresh].filter(Boolean).join('\n');
}
LINK_GROUPS.push({
  category: 'Mais links',
  name: 'Tung Tung Club',
  links: Array.from({ length: 2500 }, (_, index) => `https://cdn.jsdelivr.net/gh/dxg-links/Dxglinkdrop@main/tungtunggroup.svg?creditstodxgforlinkslikethese!!${index + 1}link`).join('\n')
});

// P2P: combinações exatamente presentes na lista compartilhada (v0001–v0100).
const p2pQueries = [
  'authuser=13833&resourcekey=UWLwqZ6e&usp=sharing&assignment_id=846',
  'authuser=2172052&resourcekey=8McByshd&usp=sharing&assignment_id=596',
  'authuser=4195411&resourcekey=MLe3kdbl&usp=sharing&assignment_id=228',
  'authuser=9932216&resourcekey=3FL6ldWX&usp=sharing&assignment_id=892',
  'id=111&edge=cf_f4ed3a&v=0797', 'id=226&edge=cf_4452e5&v=4351',
  'id=43&key=108', 'id=44&key=609', 'id=550&key=629', 'id=585&key=688',
  'id=587&key=563', 'id=685&key=429', 'id=721&key=215',
  'id=9&edge=cf_b1aa5c&v=9628', 'id=983&edge=cf_abfca8&v=4284',
  'submission_id=1048865&module_item_id=950&user_id=49777&download=1',
  'submission_id=4594472&module_item_id=108&user_id=94502&download=1',
  'submission_id=4954598&module_item_id=184&user_id=92092&download=1',
  'submission_id=7058663&module_item_id=494&user_id=86371&download=1',
  'submission_id=7565256&module_item_id=92&user_id=69613&download=1',
  'submission_id=8154697&module_item_id=458&user_id=18330&download=1',
  'usp=drive_web&authuser=1002907&resourcekey=5nzOVO1S&id=925',
  'usp=drive_web&authuser=2443095&resourcekey=l4EHlTq8&id=909',
  'usp=drive_web&authuser=4389579&resourcekey=r72WJjEc&id=230',
  'usp=drive_web&authuser=4727528&resourcekey=CTYbknNo&id=287',
  'usp=drive_web&authuser=5820642&resourcekey=Ul8umv10&id=988',
  'usp=drive_web&authuser=7147287&resourcekey=w71XyRyG&id=339',
  'usp=drive_web&authuser=8584034&resourcekey=7k9L8ix7&id=679',
  'usp=drive_web&authuser=9195473&resourcekey=5P9vTot1&id=431',
  'usp=drive_web&authuser=9810813&resourcekey=Yxo7YCSS&id=246'
];
const p2pGroup = LINK_GROUPS.find(group => group.name === 'P2P' && group.category === 'Jogos');
const p2pExisting = new Set(p2pGroup.links.split('\n'));
for (let version = 1; version <= 100; version++) {
  for (const query of p2pQueries) {
    const url = `https://cdn.jsdelivr.net/gh/xzvtps/index-dn372@main/v${String(version).padStart(4, '0')}/index.svg?${query}`;
    if (!p2pExisting.has(url)) {
      p2pGroup.links += `\n${url}`;
      p2pExisting.add(url);
    }
  }
}

// Lista fornecida para C00lKid Tech: IDs 2 a 3460, inclusive.
LINK_GROUPS.push({
  category: 'Jogos',
  name: 'C00lKid Tech',
  links: Array.from({ length: 3459 }, (_, index) => `https://fastly.jsdelivr.net/gh/seattleschools/media@main/batch/Linklet/hourly/20261113000117873/f6b8a5cf4254e295.svg?id=${index + 2}`).join('\n')
});

// NYX: cinco diretórios, 25 versões, dois arquivos e dez origens fornecidos.
const nyxOrigins = [
  'https://cdn.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
  'https://fastly.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
  'https://gcore.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
  'https://testingcf.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
  'https://cdn.statically.io/gh/Firemon303Real/nyx-sf34n/main/',
  'https://rawcdn.githack.com/Firemon303Real/nyx-sf34n/main/',
  'https://raw.githack.com/Firemon303Real/nyx-sf34n/main/',
  'https://raw.githubusercontent.com/Firemon303Real/nyx-sf34n/main/',
  'https://esm.sh/gh/Firemon303Real/nyx-sf34n@main/',
  'https://raw.esm.sh/gh/Firemon303Real/nyx-sf34n@main/'
];
LINK_GROUPS.push({
  category: 'Jogos', name: 'NYX',
  links: ['assets', 'dist', 'links', 'public', 'cdn'].flatMap(directory =>
    Array.from({ length: 25 }, (_, index) => `v${String(index + 1).padStart(4, '0')}`).flatMap(version =>
      ['nyx.svg', 'app.svg'].flatMap(file => nyxOrigins.map(origin => `${origin}${directory}/${version}/${file}`))
    )
  ).join('\n')
});

// IMPV2: endereços fornecidos, incluindo as exceções iniciais de mirror.
const impV2Bases = [
  'https://cdn.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
  'https://fastly.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
  'https://gcore.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
  'https://testingcf.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
  'https://rawcdn.githack.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
  'https://raw.githack.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
  'https://raw.githubusercontent.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
  'https://esm.sh/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?raw&',
  'https://raw.esm.sh/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
  'https://cdn.staticdelivr.com/gh/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
  'https://ghproxy.net/https://raw.githubusercontent.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?'
];
LINK_GROUPS.push({
  category: 'Jogos', name: 'IMPV2',
  links: Array.from({ length: 2500 }, (_, index) => {
    const id = index + 1;
    const mirror = id === 1 ? 2 : id <= 10 ? 1 : Math.floor((id - 2) / 11) + 2;
    return `${impV2Bases[index % 11]}id=${id}&mirror=v${mirror}`;
  }).join('\n')
});

// Coleções selecionadas para a aba Melhores.
LINK_GROUPS.push(
  { category: 'Melhores', name: 'Bull33', links: `http://hcxrt.sesaech.gob.mx/
http://qqfum.sesaech.gob.mx/
http://kmr.sesaech.gob.mx/
http://aafxr.sesaech.gob.mx/
http://gjlb.sesaech.gob.mx/
http://superbull.s3.amazonaws.com/index.svg
http://superbull.s3.us-east-1.amazonaws.com/index.svg
http://superbull.s3.dualstack.us-east-1.amazonaws.com/index.svg
http://s3.amazonaws.com/superbull/index.svg
http://s3.us-east-1.amazonaws.com/superbull/index.svg
http://s3.dualstack.us-east-1.amazonaws.com/superbull/index.svg` },
  { category: 'Melhores', name: 'Cherri', links: `http://chrivtx.s3.amazonaws.com/index.html
http://chrivtx.s3.us-east-1.amazonaws.com/index.html
http://chrivtx.s3.dualstack.us-east-1.amazonaws.com/index.html
http://s3.amazonaws.com/chrivtx/index.html
http://s3.us-east-1.amazonaws.com/chrivtx/index.html
http://s3.dualstack.us-east-1.amazonaws.com/chrivtx/index.html` },
  { category: 'Melhores', name: 'Fern', links: `http://bulsobk.s3.amazonaws.com/index.html
http://bulsobk.s3.us-east-1.amazonaws.com/index.html
http://bulsobk.s3.dualstack.us-east-1.amazonaws.com/index.html
http://s3.amazonaws.com/bulsobk/index.html
http://s3.us-east-1.amazonaws.com/bulsobk/index.html
http://s3.dualstack.us-east-1.amazonaws.com/bulsobk/index.html` },
  { category: 'Melhores', name: 'Xylora', links: `http://education.slpssupersearch.com/
http://meoww.rockinghameducationalfoundation.org/
http://bees.pantaleonsoft.com/
http://mathouyp.melandbri.net/
http://proposal.ssurpropiedades.cl/` },
  { category: 'Melhores', name: 'Frogiees arcade', links: `http://cvv.dpdenton.com/
http://frogiee.slpssupersearch.com/
http://wow.ssurpropiedades.cl/
http://woah.rockinghameducationalfoundation.org/
http://educationaljobs.pantaleonsoft.com/
http://ext.thevoiceexchange.com/
http://qfjun.dpdenton.com/
http://wnpt.dpdenton.com/` },
  { category: 'Melhores', name: 'Duckmath', links: `http://fbhoh.fuchs.com.ar/
http://math.slpssupersearch.com/
http://premium.ssurpropiedades.cl/
http://lightworks.rockinghameducationalfoundation.org/
http://day.pantaleonsoft.com/
http://desync.thevoiceexchange.com/
http://dgmqp.fuchs.com.ar/
http://ptkpl.fuchs.com.ar/
http://utsl.fuchs.com.ar/` },
  { category: 'Melhores', name: 'Red Exploit', links: `http://rexploit.slpssupersearch.com/
http://omg.ssurpropiedades.cl/
http://base.rockinghameducationalfoundation.org/
http://colors.pantaleonsoft.com/
http://lowk.thevoiceexchange.com/` },
  { category: 'Melhores', name: 'Refract', links: `cdn.jsdmirror.com/gh/qsnt/tinythunder46@c15440c436ad8ee3c34576f27dcb1666606da545/refract.svg
cdn.jsdelivr.net/gh/qsnt/youngkoala25@c15440c436ad8ee3c34576f27dcb1666606da545/refract.svg
cdn.jsdelivr.net/gh/qsnt/tinythunder46@c15440c436ad8ee3c34576f27dcb1666606da545/refract.svg
http://s3.us-east-2.amazonaws.com/calmmarble80/index.html
http://s3.us-east-2.amazonaws.com/gentlefalcon86/index.html
http://s3.us-east-2.amazonaws.com/swiftmarble64/index.html
http://s3.us-east-2.amazonaws.com/boldotter99/index.html
http://s3.us-east-2.amazonaws.com/mellowpillow20/index.html
http://s3.us-east-2.amazonaws.com/cleverribbon38/index.html` },
  { category: 'Melhores', name: 'Gust', links: Array.from({ length: 4999 }, (_, index) =>
    `https://gcore.jsdelivr.net/gh/mayhem221-tech/gust@main/svg/site.svg?submission_id=89989977&module_item_id=8429&user_id=44192510&download=${index < 2088 ? index + 1 : index + 2}`
  ).join('\n') }
);

// Endereços adicionais agrupados pelos nomes fornecidos. Sem protocolo explícito,
// a interface usa HTTPS; a disponibilidade e os recursos não foram verificados.
const ADDITIONAL_LINKS = [
  ['Mais links', 'Sumi', `quillstudy.s3.amazonaws.com/index.html
s3.amazonaws.com/quillstudy/index.html
sumimath.s3.us-east-1.amazonaws.com/index.html
sumimath.s3.amazonaws.com/index.html
sumi.magmaproject.net`],
  ['Mais links', 'Rook', `aibabyy.s3-external-1.amazonaws.com/index.svg
s3.amazonaws.com/aibabyy/index.html
s3.amazonaws.com/aibabyy/index.svg
aibabyy.s3.amazonaws.com/index.svg
aibabyy.s3.amazonaws.com/index.html
rooklesson.us-lax-4.linodeobjects.com/index.svg
us-lax-4.linodeobjects.com/rook/index.svg
rook.magmaproject.net
rook.us-lax-4.linodeobjects.com/index.svg
rookdesk.us-lax-4.linodeobjects.com/index.svg
us-lax-4.linodeobjects.com/rookdesk/index.svg`],
  ['Estudos', 'Tung Tung', `s3.amazonaws.com/thinkbabyy/index.html
thinkbabyy.s3.amazonaws.com/index.html
thinkbabyy.s3-external-1.amazonaws.com/index.html
s3.us-east-1.amazonaws.com/thinkbabyy/index.html
https://d39syz90mj03qm.cloudfront.net
https://dxi6kxkjfsswh.cloudfront.net
tungtung.magmaproject.net
d2dqerhwqxradi.cloudfront.net`],
  ['Mais links', 'Kite', `notewell.us-lax-4.linodeobjects.com/index.html
studyloft.us-lax-4.linodeobjects.com/index.html
us-lax-4.linodeobjects.com/notewell/index.html
quizdesk.us-lax-4.linodeobjects.com/index.html
kite.magmaproject.net
us-lax-4.linodeobjects.com/quizdesk/index.html
us-lax-4.linodeobjects.com/lessonhub/index.html
us-lax-4.linodeobjects.com/studyloft/index.html`],
  ['Mais links', 'Interstellar', `cedarloft.us-lax-4.linodeobjects.com/index.html
oakprep.us-lax-4.linodeobjects.com/index.html
interstellar.magmaproject.net`],
  ['Mais links', 'DogeUB', `learnhive.us-lax-4.linodeobjects.com/index.html
us-lax-4.linodeobjects.com/studygate/index.html
us-lax-4.linodeobjects.com/learnhive/index.html
dogeub.magmaproject.net
studygate.us-lax-4.linodeobjects.com/index.html`],
  ['Mais links', 'Achroma', `aokjezxu6bq.map.azionedge.net
2rimjouwuyw.map.azionedge.net
d1yd3j8ypn4f12.cloudfront.net
d2md2bc53t43kn.cloudfront.net
d3uzrhklzdl2e5.cloudfront.net
dz2z1x7nmgnek.cloudfront.net
d3acwuwzmsce84.cloudfront.net
2bkyzwcgwsq.map.azionedge.net
hk1mobtpluy.map.azionedge.net
kjfexwdq6eg.map.azionedge.net
judg0kzqjeu.map.azionedge.net`],
  ['Estudos', 'Astral', `psatprep.s3.amazonaws.com/index.html
s3.amazonaws.com/psatprep/index.html
d12esrtqbw0ueh.cloudfront.net/`],
  ['Estudos', 'Refract', `d65ntvxoot46b.cloudfront.net
dolx69675hbws.cloudfront.net
dbv5jzwuxfrc8.cloudfront.net
d2psxljgjvhk1.cloudfront.net
dpmfro18vgvab.cloudfront.net`],
  ['Estudos', 'StudyHub', `dzbjxct0c9fxq.cloudfront.net/
brightdesk.s3.amazonaws.com/index.html
studyhub.magmaproject.net`],
  ['Mais links', 'Glim', `s3.amazonaws.com/deskloft/index.html
s3.us-east-1.amazonaws.com/deskloft/index.html
s3-external-1.amazonaws.com/deskloft/index.html`],
  ['Mais links', 'Onyx', `s3.amazonaws.com/onyxstudy/index.html
onyxstudy.s3.amazonaws.com/index.html
s3.us-east-1.amazonaws.com/onyxstudy/index.html
onyx.magmaproject.net`],
  ['Mais links', 'Lunar', `s3.us-east-1.amazonaws.com/fernprep/index.html
fernprep.s3.amazonaws.com/index.html
fernprep.s3.us-east-1.amazonaws.com/index.html
lunar.magmaproject.net`],
  ['Mais links', 'SolaraOS', `s3.amazonaws.com/quizharbor/index.svg
s3.us-east-1.amazonaws.com/quizharbor/index.svg`],
  ['Mais links', 'Strawberri', `d3ff66h1gfilcx.cloudfront.net
d27kls5vqpzzgb.cloudfront.net
d1hgfkw9ehuhoa.cloudfront.net
strawberri123.s3-fips.us-west-1.amazonaws.com/index.html`],
  ['Mais links', 'Flver', `flver.magmaproject.net`],
  ['Mais links', 'Voya', `voya.magmaproject.net`],
  ['Estudos', 'Aurora', `aurora.magmaproject.net`],
  ['Mais links', 'Utopia', `utopia.magmaproject.net`],
  ['Filmes e séries', 'Triple T HD', `triple.magmaproject.net`],
  ['Estudos', 'Solara', `solara.magmaproject.net`],
  ['Mais links', 'Space', `space.magmaproject.net`],
  ['Filmes e séries', 'Cinera', `cinera.magmaproject.net`],
  ['Mais links', 'Stroberri', `strob.magmaproject.net`],
  ['Mais links', 'Boba', `boba.magmaproject.net`],
  ['Mais links', 'Fern', `d2pve9ohgwdz6v.cloudfront.net
fern123site.s3.us-west-1.amazonaws.com/index.html`],
  ['Mais links', 'Xylora', `https://xylora.nwmteducationalcoop.org/
https://neator.site/
https://atlantapubliceducation.cfd/
https://seniorseducation.orbitnetworkss.org/
https://senior.herbsbynorthdaysimage.ca/
https://apples.hotelupgrade.com/
https://kick.aussieflagsandflagpoles.com.au/`],
  ['Estudos', 'Galaxy V7', `https://galaxy.nwmteducationalcoop.org/
http://wow.atlantapubliceducation.cfd/
https://education.herbsbynorthdaysimage.ca/
https://backup.hotelupgrade.com/
https://bigger.aussieflagsandflagpoles.com.au/`],
  ['Mais links', 'Cherri', `https://cherri.nwmteducationalcoop.org/
http://yean.atlantapubliceducation.cfd/
https://sudden.herbsbynorthdaysimage.ca/
https://bitter.hotelupgrade.com/
https://lasting.aussieflagsandflagpoles.com.au/`],
  ['Estudos', 'Opium', `https://tinyurl.com/opiumdotbest
https://opm.d2ftp8cchfyksh.amplifyapp.com/
https://s3.amazonaws.com/cleverlearning/study
https://storage.googleapis.com/gclassroom/study.html`]
];
for (const [category, name, links] of ADDITIONAL_LINKS) {
  const group = LINK_GROUPS.find(item => item.category === category && item.name === name);
  if (group) group.links += `\n${links}`;
  else LINK_GROUPS.push({ category, name, links });
}

// IA informada pelo usuário para esta coleção específica; não se aplica aos outros links de Achroma.
LINK_GROUPS.push({
  category: 'Mais links',
  name: 'Achroma (Oracle Cloud)',
  aiConfirmed: true,
  links: Array.from({ length: 5000 }, (_, index) =>
    `https://objectstorage.uk-london-1.oraclecloud.com/n/lrqakfyhovf5/b/learn-maths-7k2/o/app.html?h=ExasTMlinks${index + 1}`
  ).join('\n')
});

LINK_GROUPS.push({
  category: 'Filmes',
  name: 'YouShows',
  links: 'youshows.org',
  note: 'airport absent anger asset alter athlete brave assault amateur bullet camp awesome'
});

// Links recebidos: classificação por nome reconhecível ou contexto; destinos não verificados.
const DISCORD_LINKS = [
  ["Melhores", "Bull33", `https://bull-33.shentaichiacademy.co.uk/
https://big-b.streetdirectory.sg/
https://bu11.streetdirectory.sg/
https://bull-books.streetdirectory.sg/
https://bull-learning.streetdirectory.sg/
https://super-b-learning.streetdirectory.sg/
https://bull-33.belyfit.cl/
http://bull-33.cobos.mx/
https://bull-33.apexflightacademy.com/
https://bull-33.bagatz.com/
http://bull-33.olneybaptist.org/
https://bull-33.lirr.space/
https://bull-33.lakeballs.fi/`],
  ["Mais links", "Other Links", `https://a2f7ddcd320e.surge.sh/index.svg
https://0fd37c113f9b.surge.sh/index.svg
https://674e3b2109bc.surge.sh/index.svg
https://4adf89ac8de9.surge.sh/index.svg
https://2bb13756b0e1.surge.sh/index.svg
https://e47d27046020.surge.sh/index.svg
https://81a310f9297b.surge.sh/index.svg
https://93a5f72f2482.surge.sh/index.svg
https://55ec984be1d2.surge.sh/index.svg
https://5c2148b601e1.surge.sh/index.svg
https://87bb10f76c67.surge.sh/index.svg
https://8d2ef70cb97a.surge.sh/index.svg
https://f0591b49d948.surge.sh/index.svg
https://77a999db5986.surge.sh/index.svg
https://d6568d179222.surge.sh/index.svg
https://2081d70ef0b1.surge.sh/index.svg
https://4c2c74de93b6.surge.sh/index.svg
https://b78cb5944997.surge.sh/index.svg
https://eec2c94446b5.surge.sh/index.svg
https://4eccb7007316.surge.sh/index.svg
https://961373fde239.surge.sh/index.svg
https://fc8f3d1d54f8.surge.sh/index.svg
https://8b26f0c299c7.surge.sh/index.svg
https://4554feea5736.surge.sh/index.svg
https://b9f216900663.surge.sh/index.svg
https://b807e7f1d59e.surge.sh/index.svg
https://b0b900ef0db2.surge.sh/index.svg
https://65dc0a6e440a.surge.sh/index.svg
https://39c5f66a64c0.surge.sh/index.svg
https://7bf4aa3112dc.surge.sh/index.svg
https://57cc3ee6dbdf.surge.sh/
https://6fa5d0d66bf7.surge.sh/
https://1a98e93bca71.surge.sh/
https://c1f6d8235882.surge.sh/
https://f8e686ed5878.surge.sh/
https://5fdfab48801d.surge.sh/
https://16aa7d156946.surge.sh/
https://312afc3246ad.surge.sh/
https://6766a59d47ef.surge.sh/
https://7aa897322576.surge.sh/
https://e94720552a96.surge.sh/
https://f7d641b36661.surge.sh/
https://7cb2f5563b44.surge.sh/
https://c245b88f02f7.surge.sh/
https://4b4d9cbb6875.surge.sh/
https://c120495e4032.surge.sh/
https://88d12470ca45.surge.sh/
https://fa8692fbf950.surge.sh/
https://284d243a3b46.surge.sh/
https://d6b520712eb9.surge.sh/
https://9e24e4461a8b.surge.sh/
https://df58649ceba1.surge.sh/
https://5327723657c3.surge.sh/
https://e72eb098f5e9.surge.sh/
https://36c2e915a18c.surge.sh/
https://3bca2f62c4e0.surge.sh/
https://9e421ff3619f.surge.sh/
https://b978d2a27d2c.surge.sh/
https://0859d8631167.surge.sh/
https://a5ff0d8cf129.surge.sh/
https://df.govt.hu/
https://bu2133.mji.ro/
https://edu.clever.com.bsfa.info/
https://vc.bsfa.info/
https://cleverlearning.edu.kwgranitecountertops.com/
https://grammer.math.studynotes.homeworkhelp.studydesk.kwgranitecountertops.com/
https://megalearning.kwgranitecountertops.com/
https://zinkydinky.kwgranitecountertops.com/
https://zn---2kd.kwgranitecountertops.com/
https://zinktotheo.govt.hu/
https://b9d4b9fff251.surge.sh/
https://fb02baf2e781.surge.sh/
https://aae284970a89.surge.sh/
https://fd58567b3845.surge.sh/
https://fb5e837e2e9f.surge.sh/
https://eddf0ef1afdf.surge.sh/
https://b1eb280f9b66.surge.sh/
https://a973cf8d63f1.surge.sh/
https://021b4d3f139b.surge.sh/
https://58d36cf9a86f.surge.sh/
https://e54f904c7e87.surge.sh/
https://dd205836abbe.surge.sh/
https://0cefa920ed1f.surge.sh/
https://fd68c59fe7e9.surge.sh/
https://f30e097251db.surge.sh/
https://b25cac0f0823.surge.sh/
https://7ce2cb775a02.surge.sh/
https://8913cdccfecc.surge.sh/
https://eef70108449c.surge.sh/
https://2480b0ea09ae.surge.sh/
https://71b26126825e.surge.sh/
https://ca29a6d6e749.surge.sh/
https://e84605e9762c.surge.sh/
https://179bac4984c3.surge.sh/
https://0deaf71e871c.surge.sh/
https://fd61d2865f1c.surge.sh/
https://75fc9cb7aeda.surge.sh/
https://d3883215c9bf.surge.sh/
https://50c6db7ab059.surge.sh/
https://7f3c6c9e1b32.surge.sh/
https://2ab54654d212.surge.sh/
https://17a140e6b6df.surge.sh/
https://85aa31b0b8fd.surge.sh/
https://7a60879bf1b2.surge.sh/
https://0bb595794519.surge.sh/
https://18e03512f952.surge.sh/
https://ee7f31141f97.surge.sh/
https://226d4e5f9633.surge.sh/
https://f5eee457a3cb.surge.sh/
https://d9bab33d1785.surge.sh/
https://b11ukl.govt.hu/index.html
https://supermansuperserum.govt.hu/
https://highschooltutoring.govt.hu/
https://cat.govt.hu/
https://lockersuplies.govt.hu/
https://didthisatschoollol.govt.hu/
https://overs.govt.hu/
https://c80d1a9cb360.surge.sh/
https://26a27089105d.surge.sh/
https://78fc5961b96f.surge.sh/
https://2af48b626ccb.surge.sh/
https://8929c12f403f.surge.sh/
https://36326612884d.surge.sh/
https://855e6605b8d1.surge.sh/
https://8ef4462f7925.surge.sh/
https://54d8cfd3bda3.surge.sh/
https://b920832b98cc.surge.sh/
https://5ab6d8266a9b.surge.sh/
https://9ee5697917b0.surge.sh/
https://b37c3cbdd5a0.surge.sh/
https://4abbebd8a272.surge.sh/
https://f5eab3db7437.surge.sh/
https://b56386995028.surge.sh/
https://041a170b9d60.surge.sh/
https://478339f9c468.surge.sh/
https://3a7a82d4b58d.surge.sh/
https://5bb1a2d3f0b6.surge.sh/
https://c5e68515d823.surge.sh/
https://295c8783fa96.surge.sh/
https://67b66e6e1501.surge.sh/
https://72f88b1e4929.surge.sh/
https://ff697b53d3dd.surge.sh/
https://8648805dcccf.surge.sh/
https://8e92a7eff545.surge.sh/
https://483f3f21a9c4.surge.sh/
https://b623baa31054.surge.sh/
https://f84837003615.surge.sh/
https://9f511e9f74dc.surge.sh/
https://6c90b0fa78d3.surge.sh/
https://f195c4d60d0e.surge.sh/
https://c359ceb01b64.surge.sh/
https://ab6add339c33.surge.sh/
https://197a51514131.surge.sh/
https://1c872849fbb4.surge.sh/
https://5b53cbf594af.surge.sh/
https://b45069adf5c2.surge.sh/
https://9202d4ffa35f.surge.sh/
https://94ae78b0e976.surge.sh/
https://5174e90edf8b.surge.sh/
https://a1057e72451c.surge.sh/
https://ef3ce25c7193.surge.sh/
https://dfcb027afcd5.surge.sh/
https://4696dca373d3.surge.sh/
https://18429c51be60.surge.sh/
https://c90afa8b7602.surge.sh/
https://8daee990b4b8.surge.sh/
https://f763bc98fb8b.surge.sh/
https://4649951417cf.surge.sh/
https://25408b0343a1.surge.sh/
https://a48de1101437.surge.sh/
https://6a1623b168ad.surge.sh/
https://e4c05de7859d.surge.sh/
https://951020a9be36.surge.sh/
https://3ff16a4dbbdd.surge.sh/
https://2aa795f5ab0b.surge.sh/
https://85bf285f529c.surge.sh/
https://809a36d146b3.surge.sh/
https://a919decfac17.surge.sh/
https://6f71850644cc.surge.sh/
https://86a4a7370d60.surge.sh/
https://9d911fe8cf0c.surge.sh/
https://c6bc52e0a738.surge.sh/
https://775246073459.surge.sh/
https://06fa5413a9df.surge.sh/
https://c5d56c021cbf.surge.sh/
https://97ef102a8e77.surge.sh/
https://4dd00bf4d7e2.surge.sh/
https://bbb6b099f5f6.surge.sh/index.svg
https://5119ae25ef6b.surge.sh/index.svg
https://fc775b4a4b11.surge.sh/index.svg
https://1f156cc0da7f.surge.sh/index.svg
https://c54726e8a5a4.surge.sh/index.svg
https://b64b6d791df1.surge.sh/index.svg
https://f50e6eadae16.surge.sh/index.svg
https://f4d45a1c4723.surge.sh/index.svg
https://10fabf77e3c8.surge.sh/index.svg
https://5638846618a5.surge.sh/index.svg
https://aeaf3b808dea.surge.sh/index.svg
https://991bf586baed.surge.sh/index.svg
https://9de40c919226.surge.sh/index.svg
https://29327c102a9b.surge.sh/index.svg
https://15bfdf200867.surge.sh/index.svg
https://ba68562c2468.surge.sh/index.svg
https://aaf2d3883468.surge.sh/index.svg
https://580627468e38.surge.sh/index.svg
https://3c319aa486d0.surge.sh/index.svg
https://eab82eacc59b.surge.sh/index.svg
https://944daf463d7a.surge.sh/index.svg
https://11ff82d53350.surge.sh/index.svg
https://68cdb3f69d27.surge.sh/index.svg
https://d884d6bf0158.surge.sh/index.svg
https://10456887ef72.surge.sh/index.svg
https://8771143a15c6.surge.sh/index.svg
https://cf0fcbb41c9f.surge.sh/index.svg
https://8cfcd3607635.surge.sh/index.svg
https://34f81f15071f.surge.sh/index.svg
https://71d5d9db6dfd.surge.sh/index.svg
https://clever.ixl.learning.gov.nextcomm.com.ar/
https://clever.ixl.learning.gov.school.nextcomm.com.ar/
https://government.usa.gov.nextcomm.com.ar/
https://megalearning.nextcomm.com.ar/
https://ixl.com.pulsaudio.ro/
https://learninghelp.edu.pulsaudio.ro/
https://ddfg.pulsaudio.ro/
https://wefr.pulsaudio.ro/
http://grammer.learning.geometry.math.pulsaudio.ro/
http://webackbaby.thefilmdatabase.com/
https://6yearsandstillgoingstrong.edu.learning.thefilmdatabase.com/
http://timetodomymagic.thefilmdatabase.com/
http://learning.clever.nondestructivetesting.ca/
http://ixl.edu.nondestructivetesting.ca/
http://edu.edu.learning.streetdirectory.sg/
http://superlearning.edu.streetdirectory.sg/
http://cleverlearning.edu.nextcomm.com.ar/
http://government.usa.gov.gov.nextcomm.com.ar/
https://imps.rusticrivergear.com/
https://intothestellar.rusticrivergear.com/
https://newstudyguied.rusticrivergear.com/
https://super.math.studyhelp.teachersforhire.rusticrivergear.com/
https://xyalora.rusticrivergear.com/
https://learninghelp.alte.ca/
https://learninghelp.electricalone.com/
https://learninghelp.hackershack.net/
https://learninghelp.mindboggle.us/
https://learninghelp.tribeoftwo.com/
https://learninghelp.50friends.com.mx/
https://didyoumissme.dila.cl/
https://theynotlikeus.dila.cl/
https://imback.nextcomm.com.ar/
https://learninghelp.nextcomm.com.ar/
https://learninghelp.gula.com.ar/
https://learninghelp.manasit.com.ar/
https://learninghelp.nondestructivetesting.ca/
https://learninghelp.sanjayparajuli.com.np/
https://learninghelp.streetdirectory.sg/
https://learninghelp.c-abogados.com.ar/
https://learninghelp.garymcgill.ca/
https://learninghelp.gmk.cl/
https://learninghelp.n43.pw/
https://learninghelp.princesaleia.cl/
https://site-g6kxrd8n.myoxypages.com/AppStore%20[1.7.2]
https://site-g6kxrd8n.myoxypages.com/Balatro
https://site-g6kxrd8n.myoxypages.com/alex
https://site-g6kxrd8n.myoxypages.com/FLUX
https://site-g6kxrd8n.myoxypages.com/cine
https://site-g6kxrd8n.myoxypages.com/cindercloud
https://site-g6kxrd8n.myoxypages.com/noahstoutering
https://site-g6kxrd8n.myoxypages.com/melonsoda
https://site-g6kxrd8n.myoxypages.com/
https://site-g6kxrd8n.myoxypages.com/glalaxyyoutube
https://site-g6kxrd8n.myoxypages.com/fuck-u
https://site-g6kxrd8n.myoxypages.com/noctune
https://site-g6kxrd8n.myoxypages.com/singlefile
https://site-g6kxrd8n.myoxypages.com/SFoolsOS
https://site-g6kxrd8n.myoxypages.com/quantumbrouser
https://site-g6kxrd8n.myoxypages.com/swhelium
https://site-g6kxrd8n.myoxypages.com/tobywebsinglefile
https://site-g6kxrd8n.myoxypages.com/tundra
https://site-g6kxrd8n.myoxypages.com/unblockzone%20v5
https://site-g6kxrd8n.myoxypages.com/velcro
https://site-g6kxrd8n.myoxypages.com/youtube
https://site-49pbrdm9.myoxypages.com/aeos-v4.svg
https://site-49pbrdm9.myoxypages.com/AppStore%20[2.0.0]/
https://site-49pbrdm9.myoxypages.com/AppStore%20[1.7.2]/
https://site-49pbrdm9.myoxypages.com/cloud.svg
https://site-49pbrdm9.myoxypages.com/browser.svg
https://site-49pbrdm9.myoxypages.com/axiomsvg-1.svg
https://site-49pbrdm9.myoxypages.com/artic.svg
https://site-49pbrdm9.myoxypages.com/games.svg
https://site-49pbrdm9.myoxypages.com/eclipse.svg
https://site-49pbrdm9.myoxypages.com/doesn.svg
https://site-49pbrdm9.myoxypages.com/Deserted.svg
https://site-49pbrdm9.myoxypages.com/DarkNUX.svg
https://site-49pbrdm9.myoxypages.com/Luminal.svg
https://site-49pbrdm9.myoxypages.com/helium.svg
https://site-49pbrdm9.myoxypages.com/nikehub.svg
https://site-49pbrdm9.myoxypages.com/luminalos.svg
https://site-49pbrdm9.myoxypages.com/RUINS
https://site-49pbrdm9.myoxypages.com/svguranium.svg
https://site-49pbrdm9.myoxypages.com/UBGforever.svg
https://site-49pbrdm9.myoxypages.com/tobywebsinglefile
https://site-49pbrdm9.myoxypages.com/TimmyMathWork-1.svg
https://site-cxegpaxk.myoxypages.com/xcloud-9002.svg
https://site-cxegpaxk.myoxypages.com/tuff.svg
https://site-cxegpaxk.myoxypages.com/PremiumHUB-27.svg
https://site-cxegpaxk.myoxypages.com/pizza.svg
https://site-cxegpaxk.myoxypages.com/old-nova-network(1)
https://site-cxegpaxk.myoxypages.com/milk.svg
https://site-cxegpaxk.myoxypages.com/melonsoda.svg
https://site-cxegpaxk.myoxypages.com/
https://site-cxegpaxk.myoxypages.com/index-10
https://site-cxegpaxk.myoxypages.com/glalaxyyoutube
https://site-cxegpaxk.myoxypages.com/gam3-ports.svg
https://site-cxegpaxk.myoxypages.com/frozen.svg
http://2001.streetdirectory.sg/
http://financial-literacy-budgeting-and-personal-economics-learning.streetdirectory.sg/
http://learning-argumentative-essay-structure-for-state-test-prep-unit.streetdirectory.sg/
http://learning-how-to-structure-argumentative-essays-for-state-test.streetdirectory.sg/
http://rendered-in-0.002-seconds.streetdirectory.sg/
http://learning-help-help.choperascabodefrio.com.ar/
http://super-learning-help-for-ap-stats.choperascabodefrio.com.ar/
http://learning-help.dnswish.com/
http://learning-help.my-ns.com/
http://supermegaultraultimiteoppplearning.my-ns.com/
http://help-learn.gatewaysuppliers.com.np/
http://helping-learn.gatewaysuppliers.com.np/
http://helping-learning.gatewaysuppliers.com.np/
http://learn-help.gatewaysuppliers.com.np/
http://learning-help.gatewaysuppliers.com.np/
http://just-do-you-work-bro.dnswish.com/
http://learn-today.dnswish.com/
http://learning.dnswish.com/
http://learning-tomorrow.dnswish.com/
http://g-o-o-g-l-e.c-o-m.nextcomm.com.ar/
http://gogle-search-caseoh-youtube.nextcomm.com.ar/
http://learn-all-the-digits-of-pi-today-for-free-with-free-study-notes.nextcomm.com.ar/
http://learn-how-to-write-better-essay-today-for-free-free-study-notes.nextcomm.com.ar/
http://learning-tomorrow.nextcomm.com.ar/
https://cdn.jsdelivr.net/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://fastly.jsdelivr.net/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://gcore.jsdelivr.net/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://testingcf.jsdelivr.net/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://quantil.jsdelivr.net/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://originfastly.jsdelivr.net/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://cdn.staticdelivr.com/gh/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://jsd.onmicrosoft.cn/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://cdn.jsdmirror.com/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://githubraw.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://cdn.githubraw.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://raw.githack.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://rawcdn.githack.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://cdn.statically.io/gh/studyyard/67@8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://raw.githubusercontent.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://gh-proxy.com/https://raw.githubusercontent.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://ghproxy.net/https://raw.githubusercontent.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://gh.llkk.cc/https://raw.githubusercontent.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://ghfast.top/https://raw.githubusercontent.com/studyyard/67/8804b901f6fcbad0e10294fbf05d019269f2258a/index.svg
https://declaration-of-independence.tribeoftwo.com/
https://essay-help.tribeoftwo.com/
https://free.afraid.org.tribeoftwo.com/
https://sh.surge.tribeoftwo.com/
https://surge.sh.tribeoftwo.com/
https://blooket.com.tribeoftwo.com/
https://go0gle.com.tribeoftwo.com/
https://ts-is-tuff.tribeoftwo.com/
https://wait-a-minute-who-are-you.tribeoftwo.com/
https://youtube.com.tribeoftwo.com/
https://ajh.solidaritysafaris.com/
https://ajh-please-halloween-update.solidaritysafaris.com/
https://dns-auth-trace.solidaritysafaris.com/
https://im-so-bad-with-linux.solidaritysafaris.com/
https://w-update.solidaritysafaris.com/
https://help-me-learn.govt.hu/
https://learn-help-me.govt.hu/
https://learn-bro-please.rusticrivergear.com/
https://learn-tommorow-or-else-evil-laugh.rusticrivergear.com/
https://mr.g-is-the-tuffest-teacher.rusticrivergear.com/
https://use.gov.gov.trump.jimmy.gov.rusticrivergear.com/
https://where-my-holloween-update.rusticrivergear.com/
https://help-me-learn.nextcomm.com.ar/
https://learn-help-me.nextcomm.com.ar/
https://learn-me-help.nextcomm.com.ar/
https://15.204.254.75.streetdirectory.sg/
https://anything-but-work.streetdirectory.sg/
https://idk-what-to-name.streetdirectory.sg/
https://just-do-your-work-gng.streetdirectory.sg/
https://this-is-learning.streetdirectory.sg/
https://halloween-update-when.streetdirectory.sg/
https://i-need-new-domains.streetdirectory.sg/
https://im-not-cooking.streetdirectory.sg/
https://im-really-learning.streetdirectory.sg/
https://link-maker.streetdirectory.sg/
https://edu-rocks.tribeoftwo.com/
https://rocks.tribeoftwo.com/
https://w-game-library.tribeoftwo.com/
https://w-pokerouge.tribeoftwo.com/
https://why-is-this-not-popular.tribeoftwo.com/
https://edu-rocks.rusticrivergear.com/
https://mfmf.rusticrivergear.com/
https://not-learning.rusticrivergear.com/
https://pokerouge.rusticrivergear.com/
https://this-is-not-edu.rusticrivergear.com/
https://edu-rock.streetdirectory.sg/
https://edu-rocks.streetdirectory.sg/
https://edu-the-rock-gng.streetdirectory.sg/
https://rock-edu.streetdirectory.sg/
https://rocks-edu.streetdirectory.sg/
http://c00l-learning.govt.hu/
http://c00l-lightspeed.govt.hu/
http://c000-learning.nextcomm.com.ar/
http://c00l-learning.edu.rusticrivergear.com/
http://c00l-learning.edu.streetdirectory.sg/
https://weslack.govt.hu/
https://we-slack.nextcomm.com.ar/
https://we-slack.rusticrivergear.com/
https://we-slack.streetdirectory.sg/
https://we-slack.tribeoftwo.com/
https://learning-help.bashundharafoundation.org.np/
https://haven-learning.dikpalkc.com.np/
https://essay-writing.govt.hu/
https://essay-writing-test.govt.hu/
https://learning-help-edu.edu.metropolitanstaffingsolutions.com/
http://luna.govt.hu/
http://luna.rusticrivergear.com/
http://luna.solidaritysafaris.com/
http://luna.streetdirectory.sg/
http://luna.tribeoftwo.com/
http://luna.champagnewishesandrvdreams.com/
http://luna.cobos.mx/
http://luna.gatewaysuppliers.com.np/
http://luna.lakeballs.fi/
http://luna.thefilmdatabase.com/
http://luna-2.streetdirectory.sg/
http://luna-3.streetdirectory.sg/
http://luna-4.streetdirectory.sg/
https://edu-rocks.eglobaltravelmedia.asia/
https://edu-rocks.sunil7.com.np/
https://edu-rocks.belyfit.cl/
https://ddidd.eglobaltravelmedia.asia/
https://oooooo.eglobaltravelmedia.asia/
http://bromine.solidaritysafaris.com/
http://luna-s.solidaritysafaris.com/
http://void.solidaritysafaris.com/
https://truffled.apexflightacademy.com/
https://cheesy.apexflightacademy.com/
https://ink.apexflightacademy.com/
https://krypton.apexflightacademy.com/
https://j-m-w.apexflightacademy.com/
https://luna.apexflightacademy.com/
https://other.apexflightacademy.com/
https://celo-ai.apexflightacademy.com/
https://classroom-spot.apexflightacademy.com/
https://equinox.apexflightacademy.com/
https://mono-math.apexflightacademy.com/
https://nexus.apexflightacademy.com/
https://void.apexflightacademy.com/
https://edu-rocks.apexflightacademy.com/
https://flare.apexflightacademy.com/
https://reds.apexflightacademy.com/
https://edu-rocks.bagatz.com/
https://luna.bagatz.com/
https://void.bagatz.com/
https://edu-rocks.voudouris.org/
https://luna.voudouris.org/
https://void.voudouris.org/
http://nexus.olneybaptist.org/
http://reds.olneybaptist.org/
http://void.olneybaptist.org/
https://axiom.lirr.space/
https://catclass.lirr.space/
https://study-tutors.lirr.space/
https://void.latinliturgy.com/
https://arch.nothingbox.net/
https://edu-rocks.nothingbox.net/
https://luna.nothingbox.net/
https://edu-rocks.lakeballs.fi/
https://flare.lakeballs.fi/
https://void.lakeballs.fi/
https://aerggre.tribeoftwo.com/
https://edu-rockss.tribeoftwo.com/
https://pokerouges.tribeoftwo.com/
https://rocks-edusssss.tribeoftwo.com/
https://weffe.tribeoftwo.com/
https://6tothe7.solidaritysafaris.com/
https://vex-parts.solidaritysafaris.com/
https://void-edu.solidaritysafaris.com/
https://voidistuff.solidaritysafaris.com/
https://voids.solidaritysafaris.com/
https://pagelive.space/p/k683joig
https://pagelive.space/p/1b9243cw
http://edu-rocks.rave.ar/
http://luna.rave.ar/
http://void.rave.ar/
https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/mathlearning/o/index.svg
https://lunaris.bagatz.com/
https://argumentative-essay.1776arms.com/
https://the-outsiders.olneybaptist.org/
https://lanaris.voudouris.org/
https://cat4z.s3.amazonaws.com/index.html
https://cat4z.s3.us-east-1.amazonaws.com/index.html
https://cat4z.s3-external-1.amazonaws.com/index.html
https://s3.amazonaws.com/cat4z/index.html
https://s3.us-east-1.amazonaws.com/cat4z/index.html
https://s3-external-1.amazonaws.com/cat4z/index.html
https://storage.googleapis.com/cat4z/index.html
https://cat4z.storage.googleapis.com/index.html
https://objectstorage.eu-amsterdam-1.oraclecloud.com/n/axzqmye6oppx/b/cat4z/o/index.html
https://lizz.voudouris.org/
https://cvv.voudouris.org/
https://quuqb.voudouris.org/
https://pffs.voudouris.org/
https://zsu.voudouris.org/
https://h118fb3.chloechu.com/
https://hb29e4f.branzcatarroja.com/
https://hd1fac7.tosochilemat.cl/
https://hb713c4.imobilandconfort.ro/
https://h114a0e.htcengineers.com/
https://hb1ce54.htcengineers.com/
https://box-school98.fukushimastudy.org/
https://cdn.esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdeliver.us/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.jsdeliver.us/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdelivr.net.cn/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.jsdelivr.net.cn/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdelivr.net/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.jsdelivr.net/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.jsdmirror.com/gh/task4z/classroom-15x/files/catclass/index.svg
https://cdn.jsdmirror.com/gh/task4z/classroom-15x/files/catclass/logo.svg
https://cdn.statically.io/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.statically.io/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://cdn.staticdelivr.com/gh/task4z/classroom-15x/9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://cdn.staticdelivr.com/gh/task4z/classroom-15x/9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://dean-mew78.mathmatics.ccwu.cc/
https://esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://esm.sh/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/logo.svg
https://fastly.jsdelivr.net/gh/task4z/classroom-15x@9bcc6db6e5d4046811588d61ed0f1a6ed8d5dd9c/files/catclass/index.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-2.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-3.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-4.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-5.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-6.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-7.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-8.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-9.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-10.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-11.svg
https://esm.sh/gh/Mtreasur0133-bit/yukiyukiyooo-m9o-1@main/yukiEDU-12.svg`],
  ["Estudos", "Revault", `https://revault.nextcomm.com.ar/
https://books-edu.gov.edu.gov.edu.tribeoftwo.com/
https://chrome-newtab.tribeoftwo.com/
https://clever.com.ixl.com.tribeoftwo.com/
https://im-out-of-domains-ngl.tribeoftwo.com/
https://learning-using-clever-edu.gov.edu.tribeoftwo.com/
https://re-vault.apexflightacademy.com/
https://revault.lirr.space/
http://revault.rave.ar/
https://re-vault.bagatz.com/
https://revault.olneybaptist.org/
https://re-vault.voudouris.org/`],
  ["Mais links", "Fern", `https://site-g6kxrd8n.myoxypages.com/Fern`],
  ["Mais links", "Zaka", `https://site-g6kxrd8n.myoxypages.com/zaka
https://site-49pbrdm9.myoxypages.com/Zaka.svg
https://site-cxegpaxk.myoxypages.com/zaka.svg
https://site-cxegpaxk.myoxypages.com/zaka%20copy.svg
https://zaka.apexflightacademy.com/`],
  ["Jogos", "IMPV2", `https://site-49pbrdm9.myoxypages.com/Imp%20Games.svg
https://imp-v2.apexflightacademy.com/`],
  ["Jogos", "NYX", `https://site-49pbrdm9.myoxypages.com/nyx.svg
https://site-cxegpaxk.myoxypages.com/nyx.svg`],
  ["Mais links", "Selenite", `https://idk-anymore-names.rusticrivergear.com/
https://idk-bro.rusticrivergear.com/
https://selling-education-free.rusticrivergear.com/
https://super-learnin.rusticrivergear.com/
https://the-tine.rusticrivergear.com/
https://seletine.apexflightacademy.com/`],
  ["Jogos", "Duck Math", `https://duck.edu.rusticrivergear.com/
https://duckmath.rusticrivergear.com/
https://independent-reading-test.solidaritysafaris.com/
https://mega-duck.solidaritysafaris.com/
https://the-hunger-games-reading.solidaritysafaris.com/
https://duck.apexflightacademy.com/
http://duck.olneybaptist.org/
https://duck.lirr.space/
https://duck.latinliturgy.com/
https://duck.lakeballs.fi/
https://duck.tribeoftwo.com/
https://ducking-tard.tribeoftwo.com/
https://duckmath.tribeoftwo.com/
https://ducks.tribeoftwo.com/
https://what-the-duck.tribeoftwo.com/
http://duck.rave.ar/
https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/mathlearning/o/duckmath.svg
https://duck.rigaprecast.com/`],
  ["Mais links", "Achroma", `http://learn-today.govt.hu/
http://essay-map-test.nextcomm.com.ar/
http://essay-learning.rusticrivergear.com/
http://idk-bro-just-do-your-work.solidaritysafaris.com/
http://yo-give-me-link-droper-role.streetdirectory.sg/
https://achcroma.bagatz.com/
https://achcroma.voudouris.org/
https://achcroma.latinliturgy.com/`],
  ["Jogos", "C00lKid Tech", `http://tech-the-kidd-that-is-cool.gatewaysuppliers.com.np/
http://cool-kidd-tech.solidaritysafaris.com/
http://is-this-tuff-enough.solidaritysafaris.com/
http://c00l-learning.edu.tribeoftwo.com/
http://coolkiddtech.tribeoftwo.com/
https://c00lkidtechh.eglobaltravelmedia.asia/`],
  ["Mais links", "C00lKid", `https://c00lkid.belyfit.cl/
https://c00lkid.sunil7.com.np/
https://c00lkid.eglobaltravelmedia.asia/
https://c00lkid.ansoft.cl/
https://c00lkid.armeniaincentives.com/
https://c00lkid.majoitus.ee/
https://c00lkid.rigaprecast.com/
https://c00lkid.starnightimport.com/
http://c00lkid.hosteriafutaleufu.cl/
http://c00lkid.hotel-am-brillantengrund.at/
http://c00lkid.manoahinvest.com/
http://c00lkid.rednutricional.cl/
http://c00lkid.scarboroughgymelites.ca/
https://c00lkid.apexflightacademy.com/
https://c00lkid.voudouris.org/
https://c00lkid.latinliturgy.com/`],
  ["Mais links", "TGLSC V5", `http://tglsc.cobos.mx/
http://tglsc.starnightimport.com/
http://tglsc.thefilmdatabase.com/
http://tglsc-is-back.tribeoftwo.com/
http://tglsc.solidaritysafaris.com/`],
  ["Estudos", "Galaxy V7", `http://galaxy.solidaritysafaris.com/
https://galaxy.apexflightacademy.com/
https://galaxy.lirr.space/
https://galaxy.latinliturgy.com/`],
  ["Filmes e séries", "Triple T HD", `https://triple-t-hd.apexflightacademy.com/`],
  ["Estudos", "Tung Tung", `https://tungtung.apexflightacademy.com/`],
  ["Estudos", "Solara", `https://solara.apexflightacademy.com/
https://solara.lirr.space/`],
  ["Mais links", "Space", `https://space.apexflightacademy.com/`],
  ["Estudos", "StudyHub", `https://study-hub.apexflightacademy.com/`],
  ["Mais links", "Xylora", `https://xylora.apexflightacademy.com/
https://xylora.lirr.space/`],
  ["Estudos", "Astra", `https://astra.apexflightacademy.com/`],
  ["Estudos", "Aurora", `https://aurora.apexflightacademy.com/`],
  ["Mais links", "Aether", `https://ather.apexflightacademy.com/
https://ather.lirr.space/
https://aetherbeta.storage.googleapis.com/study.html
https://aetherinstitution.storage.googleapis.com/study.html
https://aetherschools.storage.googleapis.com/study.html
https://apresources.storage.googleapis.com/study.html
https://apushistory.storage.googleapis.com/study.html
https://atlantak12.storage.googleapis.com/study.html`],
  ["Mais links", "Desync", `https://desync.apexflightacademy.com/`],
  ["Mais links", "Interstellar", `https://interstellar.apexflightacademy.com/`],
  ["Mais links", "Zodiac", `https://zodiac.nothingbox.net/`],
  ["Mais links", "Cherri", `https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/ilovecherri/o/index.svg
https://cdn.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?1
https://fastly.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?1
https://gcore.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?1
https://quantil.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?1
https://jsdelivr.b-cdn.net/gh/username9927282/cherrisvg@main/index.svg?1
https://originfastly.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?1
https://testingcf.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?1
https://rawcdn.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?1
https://unpkg.com/username9927282/cherrisvg/index.svg?1
https://cdn.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?2
https://fastly.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?2
https://gcore.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?2
https://quantil.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?2
https://jsdelivr.b-cdn.net/gh/username9927282/cherrisvg@main/index.svg?2
https://originfastly.jsdelivr.net/gh/username9927282/cherrisvg@main/index.svg?2`],
  ["Estudos", "Opium", `https://objectstorage.us-sanjose-1.oraclecloud.com/n/axjcou67ax5a/b/mathlearning/o/singlefile.svg`],
  ["Jogos", "GN-Math", `https://gn-math.1776arms.com/`],
];
for (const [category, name, links] of DISCORD_LINKS) {
  const group = LINK_GROUPS.find(item => item.category === category && item.name === name);
  group.links += `\n${links}`;
}

// Reorganização de Other Links: só separa nomes explícitos ou lotes identificados.
// Mantenha esta lista de coleções recentes manualmente e informe o usuário ao alterá-la.
const RECENT_COLLECTIONS = new Set([
  'Mais links|Other Links', 'Mais links|Rammerhead', 'Mais links|Edu Rocks',
  'Mais links|Luna', 'Mais links|Void', 'Mais links|WeSlack', 'Mais links|Cat4z',
  'Mais links|CatClass', 'Mais links|YukiEDU', 'Mais links|LuminalOS',
  'Mais links|Ivy'
]);
const otherLinks = LINK_GROUPS.find(group => group.category === 'Mais links' && group.name === 'Other Links');
const luminalHosts = new Set(`bbb6b099f5f6 5119ae25ef6b fc775b4a4b11 1f156cc0da7f c54726e8a5a4 b64b6d791df1 f50e6eadae16 f4d45a1c4723 10fabf77e3c8 5638846618a5 aeaf3b808dea 991bf586baed 9de40c919226 29327c102a9b 15bfdf200867 ba68562c2468 aaf2d3883468 580627468e38 3c319aa486d0 eab82eacc59b 944daf463d7a 11ff82d53350 68cdb3f69d27 d884d6bf0158 10456887ef72 8771143a15c6 cf0fcbb41c9f 8cfcd3607635 34f81f15071f 71d5d9db6dfd`.split(' '));
const eduRocksBatch = new Set(`https://edu-rocks.tribeoftwo.com/
https://rocks.tribeoftwo.com/
https://w-game-library.tribeoftwo.com/
https://w-pokerouge.tribeoftwo.com/
https://why-is-this-not-popular.tribeoftwo.com/
https://edu-rocks.rusticrivergear.com/
https://mfmf.rusticrivergear.com/
https://not-learning.rusticrivergear.com/
https://pokerouge.rusticrivergear.com/
https://this-is-not-edu.rusticrivergear.com/
https://edu-rock.streetdirectory.sg/
https://edu-rocks.streetdirectory.sg/
https://edu-the-rock-gng.streetdirectory.sg/
https://rock-edu.streetdirectory.sg/
https://rocks-edu.streetdirectory.sg/`.split('\n'));
function identifyOtherLink(link) {
  const address = link.replace(/^https?:\/\//i, '').toLowerCase();
  const slash = address.indexOf('/');
  const host = slash < 0 ? address : address.slice(0, slash);
  const path = slash < 0 ? '' : address.slice(slash).split(/[?#]/, 1)[0];
  const first = host.split('.')[0];
  if (/(^|[.\/_-])ivy([.\/_-]|$)/i.test(`${host}${path}`)) return 'Ivy';
  if (first.startsWith('rammer') || first.startsWith('rammhead')) return 'Rammerhead';
  if (eduRocksBatch.has(link) || /^edu-rocks?/.test(first)) return 'Edu Rocks';
  if (/^luna(?:-\d+|-s)?$/.test(first)) return 'Luna';
  if (/^void(?:-edu|istuff|s)?$/.test(first)) return 'Void';
  if (/^(?:weslack|we-slack)$/.test(first)) return 'WeSlack';
  if (/(^|[.\/])cat4z([.\/]|$)/.test(`${host}${path}`)) return 'Cat4z';
  if (/(^|\/)catclass\//.test(path) || first === 'catclass') return 'CatClass';
  if (/\/yukiedu-\d+\.svg$/.test(path)) return 'YukiEDU';
  if ((host.endsWith('.surge.sh') && luminalHosts.has(first)) || /\/luminalos\.svg$/.test(path)) return 'LuminalOS';
  return null;
}
const remainingOtherLinks = [];
for (const link of otherLinks.links.split('\n').filter(Boolean)) {
  const name = identifyOtherLink(link);
  if (!name) { remainingOtherLinks.push(link); continue; }
  let group = LINK_GROUPS.find(item => item.category === 'Mais links' && item.name === name);
  if (!group) { group = { category: 'Mais links', name, links: '' }; LINK_GROUPS.push(group); }
  group.links += `${group.links ? '\n' : ''}${link}`;
}
otherLinks.links = remainingOtherLinks.join('\n');
for (const group of LINK_GROUPS) {
  if (RECENT_COLLECTIONS.has(`${group.category}|${group.name}`)) group.recent = true;
}
