import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input()
  post: any = {}

  image: string = ""

  ngOnInit() {
    console.log("post", this.post)
    if (!!this.post.images.length) {
      this.image = this.post.images[0]
    } else {
      this.image = this.post.video[0]
    }
  }
}
