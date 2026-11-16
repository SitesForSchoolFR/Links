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
