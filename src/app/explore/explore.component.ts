import { Component } from '@angular/core';
import { PersonalInformationService } from '../services/personal-information.service';
import { PersonalInformationType } from '../../types/PersonalInformation'; // Asegúrate de importar el tipo Po
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent {

  account: PersonalInformationType | null = null;
  areaStatistics: Array<any> = [
    {
      id: "followers",
      text: "seguidores"
    },
    {
      id: "followed",
      text: "seguidos"
    },
    {
      id: "posts",
      text: "publicaciones"
    },
  ];
  threads: any = {
    username: '@'
  };
  tabs = [
    {
      title: "Publicaciones",
      icon: "bi-grid-3x3"
    },
    {
      title: "Guardado",
      icon: "bi-bookmark"
    },
    {
      title: "Etiquetadas",
      icon: "bi-person-square"
    }
  ];

  constructor(private personalInformation: PersonalInformationService) {}

  ngOnInit() {
    this.account = this.personalInformation.getPersonalInformation();
    this.areaStatistics = this.areaStatistics.map((statistic) => ({
      ...statistic,
      total: statistic.id === 'followers'
        ? `${this.account!.infoaccount.seguidores} seguidores`
        : statistic.id === 'followed'
          ? `${this.account!.infoaccount.seguidos} seguidos`
          : `${this.account!.infoaccount.publicaciones} publicaciones`
    }));
    this.threads = { ...this.threads, username: `${this.threads.username} ${this.account!.threads.username}` };
    console.log("this.account", this.account);
  }

  getLikes(post: PersonalInformationType['posts'][0]): number {
    return post.likes || 0;
  }

  getComments(post: PersonalInformationType['posts'][0]): number {
    return post.comments || 0;
  }
}
