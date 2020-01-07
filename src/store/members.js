import {client, md} from './';

const getViewThumbnailPath = ({fields}) => {
  if (fields === undefined) {
    return {
      x1: '',
      x2: '',
      x3: ''
    };
  }
  const url = fields.file.url;
  return {
    x1: `${url}?w=160&h=160&fit=thumb`,
    x2: `${url}?w=320&h=320&fit=thumb`,
    x3: `${url}?w=480&h=480&fit=thumb`,
  };
};

const getViewImagePath = ({fields}) => {
  if (fields === undefined) {
    return {
      url: '',
      type: ''
    };
  }
  const width = fields.file.details.image.width;
  const height = fields.file.details.image.height;
  return {
    url: fields.file.url,
    type: (height >= width) ? 'portrait' : 'landscape'
  };
};

export const state = () => ({
  items: []
});

export const getters = {
  viewModel({items}) {
    const list = items.map((fields) => {
      const name = fields.name || '';
      const credit = fields.credit || '';
      const profile = fields.profile || '';
      const twitter = fields.twitter || '';
      const soundcloud = fields.soundcloud || '';
      const website = fields.website || '';
      const image = fields.image || {};
      return {
        name,
        credit,
        profile: md.render(profile),
        twitter,
        soundcloud,
        website,
        thumbnail: getViewThumbnailPath(image),
        image: getViewImagePath(image)
      };
    });
    return {
      list
    };
  }
};

export const mutations = {
  setItems(state, items) {
    state.items = items;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'members',
        order: 'fields.displayOrder'
      };
      const response = await client.getEntries(config);
      const items = response.items.map((entry) => {
        return entry.fields;
      });
      commit('setItems', items);
    } catch (e) {
      console.error(e);
    }
  }
};
