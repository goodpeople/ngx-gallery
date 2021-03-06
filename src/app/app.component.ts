import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Gallery, GalleryRef, ImageItem, GalleryItem } from '@ngx-gallery/core';
import { Lightbox } from '@ngx-gallery/lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  items: GalleryItem[];

  imageData = [
    {
      srcUrl: 'assets/img1.jpg',
      previewUrl: 'assets/img1.jpg'
    },
    {
      srcUrl: 'assets/img2.jpg',
      previewUrl: 'assets/img2.jpg',
    },
    {
      srcUrl: 'assets/img3.jpg',
      previewUrl: 'assets/img3.jpg',
    },
    {
      srcUrl: 'assets/img4.jpg',
      previewUrl: 'assets/img4.jpg',
    }
  ];

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {
    // This is for Basic example
    const galleryRef: GalleryRef = this.gallery.ref('basic-test');

    this.items = this.imageData.map(item => {
      return new ImageItem({ src: item.srcUrl, thumb: item.previewUrl});
    });

    // This is for Lightbox example
    this.gallery.ref('lightbox').load(galleryRef.state.items);
  }

  openLightbox() {
    this.lightbox.open(0, 'lightbox');
  }
}
