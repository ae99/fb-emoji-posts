from PIL import Image
from urllib.request import urlopen
import io
import random
import math

def load_image_from_url(url, show=False):
    fd = urlopen(url)
    image_file = io.BytesIO(fd.read())
    im = Image.open(image_file)
    if show:
        im.show()
    return im

def collate(background, foreground, x=None, y=None, show=False):
    if x is None:
        x = random.randint(0, background.width-foreground.height) + math.ceil(foreground.height/2)
    if y is None:
        y = random.randint(0, background.height-foreground.height) + math.ceil(foreground.height/2)
    background.paste(foreground, (x, y), foreground)
    if show:
        background.show()
    return background

background = "https://i.pinimg.com/originals/e8/1e/6a/e81e6a21fb162a5b18d032f9ea201ccc.jpg"

foregrounds = [
    "https://2.bp.blogspot.com/-ny-j4l3q8h4/WP2p7CBJ-CI/AAAAAAAAVLg/BGRxL-313gQB47cjV95vksMIG5Sop4IVgCLcB/s1600/frowny-face.png",
    "https://2.bp.blogspot.com/-9EuP3CsziOA/WP2oGWRtZZI/AAAAAAAAVLU/ihGzWfq9DfghH6yXUjgWt2ZltVT5teobgCLcB/s1600/facebook-smiley-face.png",
    "https://3.bp.blogspot.com/-obyqbFUogJM/WPOxYn62s2I/AAAAAAAAVK4/JpmCr0ioN7Q-Yqwz7fhxMOqEM1tCj0T6ACLcB/s1600/grinning-facebook-emoticon.png",
    "https://1.bp.blogspot.com/-XOzfje97sCI/WP2p7eOyw5I/AAAAAAAAVLo/tOzw1g_Pv0oHFwTDObjWtnbNgrd-RRWkACLcB/s1600/crying-facebook-emoticon.png",
    "https://3.bp.blogspot.com/-DALPe5hesYA/WP2q-3Fon_I/AAAAAAAAVL8/vKoxXH_dQv4indfrGho1nSGgfsMmHJS8QCLcB/s1600/facebook-angel-smiley.png",
    "https://3.bp.blogspot.com/-DALPe5hesYA/WP2q-3Fon_I/AAAAAAAAVL8/vKoxXH_dQv4indfrGho1nSGgfsMmHJS8QCLcB/s1600/facebook-angel-smiley.png",
    "https://1.bp.blogspot.com/-5SJL3iTzicU/WP2q-jx-0DI/AAAAAAAAVL0/vn5ArgiLpA8Xkt4nh2ZzTMfOeVL6cqxkwCLcB/s1600/shocked-facebook-emoticon.png",
    "https://2.bp.blogspot.com/-LkuwixWyxZ4/WP2swT3JECI/AAAAAAAAVMU/1TrmcrJjGqkr7RqGkJMmGPs2e2a-9nrAACLcB/s1600/upset-emoji.png",
    "https://2.bp.blogspot.com/-tcKrAFQCf_0/WP50NYwvF8I/AAAAAAAAVNo/Vdj72P0YwFECJTrI5g268Ve0NluyYAUgQCLcB/s1600/unsure-emoticon.png",
    "https://3.bp.blogspot.com/-YnuOer0aWYg/WP5t2dkEkjI/AAAAAAAAVMs/2Qpr8JWJfdUsSsYmNtShP_tvJgguCTqlACLcB/s1600/blushing-smiley.png"
]
img = load_image_from_url(background)
for foreground in foregrounds:
    img = collate(img, load_image_from_url(foreground))
img.show()