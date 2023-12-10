import { Injectable } from '@angular/core';
import { PersonalInformationType } from '../../types/PersonalInformation';
import { NetworkService } from './network.service';

@Injectable({
  providedIn: 'root'
})
export class PersonalInformationService {

  private personalInformation: PersonalInformationType = {
    username: "",
    infoaccount: {
      publicaciones: 0,
      seguidores: 0,
      seguidos: 0,
      descripcion: "",
      imageProfile: ""
    },
    highlights: [],
    posts: [
      {
        multiple: false,
        isVideo: false,
        creation: '2023-12-10T12:00:00Z',
        isEdited: false,
        lastModification: '2023-12-10T12:00:00Z',
        persons: [],
        description: 'Una descripción de la publicación.',
        isPrivate: false,
        likes: 47,
        comments: 1,
      },
    ],
    threads: {
      username: "",
      privado:  false
    }
  }

  constructor(private networkService: NetworkService) {
    this.setPersonalInformation(this.networkService.obtainData());
  }

  getPersonalInformation(): PersonalInformationType {
    return this.personalInformation
  }

  setPersonalInformation(information: any): void {
    const { results: [ profile ] } = information;
    const {
      account: { threads, highlights, followed, followers, posts: accountPosts, image },
      personal: { username },
      posts
    } = profile;
    this.personalInformation = {
      ...this.personalInformation,
      username,
      posts,
      highlights,
      threads: {
        username: threads.username,
        privado: !!threads.private // undefined -> false - true - false
      },
      infoaccount: {
        publicaciones: accountPosts,
        seguidores: followers,
        seguidos: followed,
        descripcion: profile.account.description ?? "",
        imageProfile: image
      }
    };
  }

}
