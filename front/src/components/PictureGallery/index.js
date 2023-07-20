import { useState } from "react";
import BgImg from "@pictures/about.jpg";
import { useTranslation } from "react-i18next";
import { Gallery } from "react-grid-gallery";

import Relaxation from "@gallery/relaxation.jpg";
import Acostage from "@gallery/acostage.jpg";
import Contemplation from "@gallery/contemplation.jpg";
import Conviviality from "@gallery/conviviality.jpg";
import Discovery from "@gallery/discovery.jpg";
import Escape from "@gallery/escape.jpg";
import Immensity from "@gallery/immensity.jpg";
import MadeToMesure from "@gallery/made_to_mesure.jpg";
import Marina from "@gallery/marina.jpg";
import Romantic from "@gallery/romantic.jpg";
import Sunset from "@gallery/sunset.jpg";
import Swimming from "@gallery/swimming.jpg";

import layout1 from "@gallery/possible_layout/layout1.jpg";
import layout2 from "@gallery/possible_layout/layout2.jpg";
import layout3 from "@gallery/possible_layout/layout3.jpg";
import layout4 from "@gallery/possible_layout/layout4.jpg";
import layout5 from "@gallery/possible_layout/layout5.jpg";
import layout6 from "@gallery/possible_layout/layout6.jpg";
import layout7 from "@gallery/possible_layout/layout7.jpg";
import layout8 from "@gallery/possible_layout/layout8.jpg";
import layout9 from "@gallery/possible_layout/layout9.jpg";
import layout10 from "@gallery/possible_layout/layout10.jpg";
import layout11 from "@gallery/possible_layout/layout11.jpg";
import layout12 from "@gallery/possible_layout/layout12.jpg";
import layout13 from "@gallery/possible_layout/layout13.jpg";
import layout14 from "@gallery/possible_layout/layout14.jpg";
import layout15 from "@gallery/possible_layout/layout15.jpg";

import layout16 from "@gallery/boat.jpg";
import layout17 from "@gallery/inside_boat.jpg";
import layout18 from "@gallery/sunshade.jpg";

import ImageFullScreen from "@components/PictureGallery/PictureFullScreen";

const PictureGallery = () => {
  const { t } = useTranslation();

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleImageClick = (index) => {
    console.log('je suis la');
    setFullscreenImage(pictures[index]);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  const pictures = [
    {
      id: 1,
      src: Relaxation,
      caption: t("gallery.title.relaxation"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.relaxation")}</div>
        </div>
      ),
      alt: t("gallery.description.relaxation"),
      key: "relaxation",
      width: 623,
      height: 831,
    },
    {
      id: 2,
      src: Discovery,
      caption: t("gallery.title.discovery"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.discovery")}</div>
        </div>
      ),
      alt: t("gallery.description.discovery"),
      key: "discovery",
      width: 320,
      height: 400,
    },
    {
      id: 3,
      src: Acostage,
      caption: t("gallery.title.acostage"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.acostage")}</div>
        </div>
      ),
      alt: t("gallery.description.acostage"),
      key: "acostage",
      width: 320,
      height: 400,
    },
    {
      id: 4,
      src: Escape,
      caption: t("gallery.title.escape"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.escape")}</div>
        </div>
      ),
      alt: t("gallery.description.escape"),
      key: "escape",
      width: 320,
      height: 400,
    },
    {
      id: 5,
      src: Sunset,
      caption: t("gallery.title.sunset"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.sunset")}</div>
        </div>
      ),
      alt: t("gallery.description.sunset"),
      key: "sunset",
      width: 320,
      height: 400,
    },
    {
      id: 9,
      src: Contemplation,
      caption: t("gallery.title.contemplation"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.contemplation")}</div>
        </div>
      ),
      alt: t("gallery.description.contemplation"),
      key: "contemplation",
    },
    {
      id: 6,
      src: Marina,
      caption: t("gallery.title.marina"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.marina")}</div>
        </div>
      ),
      alt: t("gallery.description.marina"),
      key: "marina",
    },
    {
      id: 7,
      src: Romantic,
      caption: t("gallery.title.romantic"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.romantic")}</div>
        </div>
      ),
      alt: t("gallery.description.romantic"),
      key: "romantic",
    },
    {
      id: 8,
      src: Swimming,
      caption: t("gallery.title.swimming"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.swimming")}</div>
        </div>
      ),
      alt: t("gallery.description.swimming"),
      key: "swimming",
    },
    {
      id: 10,
      src: Immensity,
      caption: t("gallery.title.immensity"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.immensity")}</div>
        </div>
      ),
      alt: t("gallery.description.immensity"),
      key: "immensity",
    },
    {
      id: 11,
      src: Conviviality,
      caption: t("gallery.title.conviviality"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.conviviality")}</div>
        </div>
      ),
      alt: t("gallery.description.conviviality"),
      key: "conviviality",
    },
    {
      id: 12,
      src: MadeToMesure,
      caption: t("gallery.title.made_to_mesure"),
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>{t("gallery.title.made_to_mesure")}</div>
        </div>
      ),
      alt: t("gallery.description.made_to_mesure"),
      key: "made_to_mesure",
    },
    {
      id: 13,
      src: layout1,
      caption: "IMAGE 1",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 1</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 1",
    },
    {
      id: 14,
      src: layout2,
      caption: "IMAGE 2",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 2</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 2",
    },
    {
      id: 15,
      src: layout3,
      caption: "IMAGE 3",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 3</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 3",
    },
    {
      id: 16,
      src: layout4,
      caption: "IMAGE 4",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 4</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 4",
    },
    {
      id: 17,
      src: layout5,
      caption: "IMAGE 5",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 5</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 5",
    },
    {
      id: 18,
      src: layout6,
      caption: "IMAGE 6",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 6</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 6",
    },
    {
      id: 19,
      src: layout7,
      caption: "IMAGE 7",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 7</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 7",
    },
    {
      id: 20,
      src: layout8,
      caption: "IMAGE 8",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 8</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 8",
    },
    {
      id: 21,
      src: layout9,
      caption: "IMAGE 9",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 9</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 9",
    },
    {
      id: 22,
      src: layout10,
      caption: "IMAGE 10",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 10</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 10",
    },
    {
      id: 23,
      src: layout11,
      caption: "IMAGE 11",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 11</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 11",
    },
    {
      id: 24,
      src: layout12,
      caption: "IMAGE 12",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 12</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 12",
    },
    {
      id: 25,
      src: layout13,
      caption: "IMAGE 13",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 13</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 13",
    },
    {
      id: 26,
      src: layout14,
      caption: "IMAGE 14",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 14</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 14",
    },
    {
      id: 27,
      src: layout15,
      caption: "IMAGE 15",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 15</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 15",
    },
    {
      id: 28,
      src: layout16,
      caption: "IMAGE 16",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 16</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 16",
    },
    {
      id: 29,
      src: layout17,
      caption: "IMAGE 17",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 17</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 17",
    },
    {
      id: 30,
      src: layout18,
      caption: "IMAGE 18",
      customOverlay: (
        <div className="custom-overlay_caption">
          <div>IMAGE 18</div>
        </div>
      ),
      alt: "Phrase descriptive",
      key: "IMAGE 18",
    },
  ];

  return (
    <main id="gallery" style={{ backgroundImage: `url(${BgImg})` }}>
      <div className="gallery_container">
        <Gallery
          images={pictures}
          enableImageSelection={false}
          rowHeight="250px"
          onClick={(index) => handleImageClick(index)}
        />
      </div>

      {fullscreenImage && (
        <ImageFullScreen
          image={fullscreenImage.src}
          description={fullscreenImage.alt}
          onClose={closeFullscreenImage}
          title={fullscreenImage.caption}
        />
      )}
    </main>
  );
};
export default PictureGallery;
