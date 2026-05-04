from PIL import Image, ImageDraw, ImageFont, ImageEnhance, ImageFilter
from pathlib import Path
import requests, io, random

W,H=1200,630
OUT=Path('public/og')
OUT.mkdir(parents=True, exist_ok=True)
serif_bold='/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf'
sans='/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'
sans_bold='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

BI={
'nelsonLandscape':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc5bb50e2b484db46c921_nelson-bc-looking-north.webp',
'procterLakeHouse':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc3e63cf060ba15246859_procter-lake-house-nelson-bc.webp',
'procterLivingRoom':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc5047afaca9df841c013_procter-lake-house-living-room.webp',
'sellerDining':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc24f50e2b484db43de69_beautiful-modern-dining-room.webp',
'bakerStreet':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbe517afaca9df83bb128_baker-street-nelson-bc.jpg',
'westArm':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbd01452436a306385f19_west-arm-kootenay-lake.webp',
'balfour':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbf4350d03715e52475f0_balfour-kootenay-lake.webp',
'taghum':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c47aa9f90e17c6340bf24_taghum-beach-nelson-bc.jpeg',
'slocan':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645c4642fd23523853ddcfc5_slocan-lake.jpeg',
'orangeBridge':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc64304b2f02d85dcc491_orange-bridge-nelson-bc.webp',
'kayaking':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dbec43c5ce9bf7bf969e7_kayaking-kootenay-lake.webp',
'lukePortrait':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645d8fbc8db94236ab1c3f92_luke-mori-sitting-on-grey-couch.webp',
'lukeContact':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/6508c07354741e28df5af2c6_IMG_4049.JPG',
'award':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/645dc87f3cf060ba1528d066_winner-black-horizontal.webp',
'whitewater':'https://cdn.prod.website-files.com/63888566469799b04b55cbf8/644c985ba7eb5cd68b85251e_skiiing-whitewater-powder.webp',
}

PAGES=[
('home.png', BI['nelsonLandscape'], 'NELSON & KOOTENAY LAKE', ['THE KOOTENAYS,','PRIVATELY'], 'Lakefront. View homes. Acreage.', 0.82, 1.14, 0.55),
('sellers.png', BI['sellerDining'], 'FOR SELLERS', ['PROTECT','THE SALE'], 'Price. Privacy. Leverage.', 0.68, 1.18, 0.42),
('buyers.png', BI['procterLivingRoom'], 'FOR BUYERS', ['KNOW THE','LIFE FIRST'], 'Nelson. Lakefront. Acreage.', 0.76, 1.14, 0.58),
('relocation.png', BI['bakerStreet'], 'RELOCATION', ['TEST THE','LIFE FIRST'], 'Schools. Seasons. Streets.', 0.78, 1.15, 0.50),
('international.png', BI['procterLakeHouse'], 'SECOND HOME BUYERS', ['BUY FROM','AFAR'], 'Advisors. Currency. Care.', 0.74, 1.16, 0.55),
('listings.png', BI['procterLakeHouse'], 'ACTIVE LISTINGS', ['FIND THE','RIGHT ADDRESS'], 'Nelson. Lakefront. Kootenays.', 0.76, 1.14, 0.55),
('listings-luxury.png', BI['procterLivingRoom'], 'LUXURY LISTINGS', ['LIVE WITH','INTENTION'], 'Views. Privacy. Design.', 0.74, 1.16, 0.58),
('listings-waterfront.png', BI['kayaking'], 'WATERFRONT LISTINGS', ['OWN THE','WATERLINE'], 'Kootenay Lake. West Arm. Balfour.', 0.78, 1.16, 0.52),
('listings-sold.png', BI['orangeBridge'], 'SOLD RECORD', ['PROOF IN','THE MARKET'], 'Results. Timing. Trust.', 0.74, 1.16, 0.55),
('nelson.png', BI['nelsonLandscape'], 'ABOUT NELSON', ['KNOW THE','GROUND'], 'City. Lake. Mountain life.', 0.82, 1.14, 0.55),
('nelson-nelson.png', BI['bakerStreet'], 'NELSON BC', ['WALKABLE','MOUNTAIN LIFE'], 'Baker Street. Schools. Culture.', 0.78, 1.16, 0.50),
('nelson-north-shore.png', BI['westArm'], 'NORTH SHORE', ['PRIVACY BY','THE WATER'], 'Views. Shoreline. Quiet arrival.', 0.78, 1.16, 0.54),
('nelson-balfour.png', BI['balfour'], 'BALFOUR', ['DEEP WATER,','SLOWER DAYS'], 'Main lake. Ferry. Moorage.', 0.78, 1.16, 0.56),
('nelson-blewett.png', BI['taghum'], 'BLEWETT', ['ACREAGE','NEAR TOWN'], 'Land. Privacy. Ten minutes.', 0.78, 1.16, 0.52),
('nelson-slocan-valley.png', BI['slocan'], 'SLOCAN VALLEY', ['RETREAT','COUNTRY'], 'River. Timber. Space.', 0.78, 1.16, 0.52),
('about.png', BI['lukePortrait'], 'ABOUT LUKE', ['LOCAL','KNOWLEDGE'], 'Nelson born. Client focused.', 0.72, 1.15, 0.52),
('testimonials.png', BI['award'], 'AWARDS & TESTIMONIALS', ['ON THE','RECORD'], 'Awards. Press. Client words.', 0.74, 1.18, 0.50),
('contact.png', BI['lukeContact'], 'CONTACT LUKE', ['START','CLEARLY'], 'Selling. Buying. Relocating.', 0.72, 1.15, 0.50),
('faq.png', BI['orangeBridge'], 'QUESTIONS', ['ASK BEFORE','YOU MOVE'], 'Selling. Buying. Relocation.', 0.76, 1.15, 0.55),
]

cache={}
def fetch(url):
    if url not in cache:
        r=requests.get(url, timeout=25, headers={'User-Agent':'Mozilla/5.0'})
        r.raise_for_status()
        cache[url]=Image.open(io.BytesIO(r.content)).convert('RGB')
    return cache[url].copy()

def cover(img,crop_bias):
    iw,ih=img.size
    scale=max(W/iw,H/ih)
    nw,nh=int(iw*scale),int(ih*scale)
    img=img.resize((nw,nh),Image.Resampling.LANCZOS)
    left=max(0,min(nw-W,int((nw-W)*crop_bias)))
    top=(nh-H)//2
    return img.crop((left,top,left+W,top+H))

def spaced(draw, xy, text, font, fill, tracking=2.4, shadow=True):
    x,y=xy
    for ch in text:
        if shadow:
            draw.text((x+1,y+2),ch,font=font,fill=(0,0,0,120))
        draw.text((x,y),ch,font=font,fill=fill)
        x += draw.textlength(ch,font=font)+tracking

def shadow_text(draw, xy, text, font, fill):
    x,y=xy
    for dx,dy,a in [(0,6,168),(3,3,122),(-2,3,108)]:
        draw.text((x+dx,y+dy),text,font=font,fill=(0,0,0,a))
    draw.text((x+1,y+1),text,font=font,fill=(150,105,54,42))
    draw.text((x,y),text,font=font,fill=fill)

def add_grain(im, opacity=7):
    rnd=random.Random(93)
    grain=Image.new('L',(W,H),0)
    px=grain.load()
    for y in range(H):
        for x in range(W):
            px[x,y]=rnd.randrange(0,256)
    grain=grain.filter(ImageFilter.GaussianBlur(0.35))
    g=Image.new('RGBA',(W,H),(255,255,255,0))
    g.putalpha(grain.point(lambda p:int(p/255*opacity)))
    return Image.alpha_composite(im,g)

def render(file,url,kicker,title,sub,bright,contrast,crop_bias):
    bg=cover(fetch(url), crop_bias)
    bg=ImageEnhance.Color(bg).enhance(1.12)
    bg=ImageEnhance.Contrast(bg).enhance(contrast)
    bg=ImageEnhance.Brightness(bg).enhance(bright)
    im=bg.convert('RGBA')
    ov=Image.new('RGBA',(W,H),(0,0,0,0))
    od=ImageDraw.Draw(ov)
    for x in range(W):
        od.line([(x,0),(x,H)],fill=(2,4,5,int(238*max(0,1-x/885)**1.25)))
    for y in range(H):
        od.line([(0,y),(W,y)],fill=(2,4,5,int(132*(y/H)**1.55)))
    radial=Image.new('L',(W,H),0)
    rd=ImageDraw.Draw(radial)
    rd.ellipse((-250,36,890,690),fill=166)
    radial=radial.filter(ImageFilter.GaussianBlur(84))
    veil=Image.new('RGBA',(W,H),(0,0,0,0))
    veil.putalpha(radial)
    warm=Image.new('RGBA',(W,H),(0,0,0,0))
    wd=ImageDraw.Draw(warm)
    for x in range(W):
        wd.line([(x,0),(x,H)],fill=(219,174,112,int(20*(x/W)**2)))
    im=Image.alpha_composite(Image.alpha_composite(Image.alpha_composite(im,ov),veil),warm)
    im=add_grain(im,7)
    d=ImageDraw.Draw(im)
    cream=(255,252,244,255); bronze=(246,209,162,255); muted=(255,250,240,252)
    f_k=ImageFont.truetype(sans_bold,18)
    f_t=ImageFont.truetype(serif_bold,92)
    f_sub=ImageFont.truetype(sans,34)
    f_mark=ImageFont.truetype(serif_bold,31)
    f_small=ImageFont.truetype(sans_bold,11)
    d.rectangle([32,32,W-32,H-32],outline=(255,255,255,78),width=1)
    d.rectangle([42,42,W-42,H-42],outline=(246,209,162,42),width=1)
    d.line([72,118,260,118],fill=(246,209,162,235),width=3)
    spaced(d,(72,84),kicker,f_k,bronze,tracking=2.0)
    y=171
    for line in title:
        shadow_text(d,(70,y),line,f_t,cream)
        y += 93
    d.text((78,y+25),sub,font=f_sub,fill=(0,0,0,165))
    d.text((75,y+21),sub,font=f_sub,fill=muted)
    spaced(d,(72,H-78),'NELSON, BRITISH COLUMBIA',f_small,(255,250,240,238),tracking=1.3)
    mark='LUKE MORI'
    tw=d.textbbox((0,0),mark,font=f_mark)[2]
    lock_x=W-92-tw; lock_y=H-104
    shadow_text(d,(lock_x,lock_y),mark,f_mark,cream)
    spaced(d,(lock_x+3,lock_y+38),'LUXURY REAL ESTATE',f_small,bronze,tracking=1.0)
    im.convert('RGB').save(OUT/file,quality=95,optimize=True)
    print(OUT/file)

for args in PAGES:
    render(*args)
