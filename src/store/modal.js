import {md} from './';

export const state = () => ({
  name: '',
  credit: '',
  profile: '',
  image: {
    path: '',
    type: ''
  },
  twitter: '',
  soundcloud: '',
  website: ''
});

export const getters = {
  imagePath(state) {
    const type = (state.image.type === 'portrait') ? '?w=' : '?h=';
    const size = 279;
    return {
      x1: `${state.image.url}${type}${size}&fit=scale`,
      x2: `${state.image.url}${type}${size * 2}&fit=scale`,
      x3: `${state.image.url}${type}${size * 3}&fit=scale`,
    };
  },
  textHtml(state) {
    return md.render(state.profile);
  }
};

export const mutations = {
  setProfile(state, {name, credit, profile, image, twitter, soundcloud, website}) {
    state.name = name;
    state.credit = credit;
    state.profile = profile;
    state.image = image;
    state.twitter = twitter;
    state.soundcloud = soundcloud;
    state.website = website;
  }
};
