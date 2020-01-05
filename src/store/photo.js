import contentful from '~/plugins/contentful';
const client = contentful.createClient();

export const state = () => ({
  fields: {}
});

export const getters = {
  viewModel({fields}) {
    const images = fields.images || [];
    const list = images.map(({fields}) => {
      const width = Math.floor(fields.file.details.image.width / 2);
      const height = Math.floor(fields.file.details.image.height / 2);
      return {
        thumbnail: {
          x1: `${fields.file.url}?fit=thumb&w=150&h=150`,
          x2: `${fields.file.url}?fit=thumb&w=300&h=300`
        },
        image: {
          x1: `${fields.file.url}?w=${width}`,
          x2: fields.file.url
        },
        size: {
          width,
          height
        }
      };
    });
    return {
      list
    };
  }
};

export const mutations = {
  setFields(state, fields) {
    state.fields = fields;
  }
};

export const actions = {
  async fetch({commit}) {
    try {
      const config = {
        content_type: 'photo',
        order: 'fields.name'
      };
      const response = await client.getEntries(config);
      commit('setFields', response.items[0].fields);
    } catch (e) {
      console.error(e);
    }
  }
};
