export const state = () => ({
    setting: [],
    sliders: [],
    works: [],
    categories: [],
    serchTag: [],
    blogs: [],
    growupcategories: [],
    teams: [],
    clients: []
})

export const mutations = {
    fetchSetting(state, setting) {
        state.setting = setting;
    },
    fetchSlider(state, sliders) {
        state.sliders = sliders;
    },
    fetchWorks(state, works) {
        state.works = works;
    },
    fetchCategories(state, categories) {
        state.categories = categories;
    },
    fetchSerchTag(state, serchTag) {
        state.serchTag = serchTag;
    },
    fetchBlogs(state, blogs) {
        state.blogs = blogs;
    },
    fetchGrowupcategories(state, growupcategories) {
        state.growupcategories = growupcategories;
    },
    fetchTeams(state, teams) {
        state.teams = teams;
    },
    fetchClients(state, clients) {
        state.clients = clients;
    },
}

export const actions = {
    async fetchSettingFirst({ commit }) {
        var setting = await this.$axios.$get('/setting'),
            sliders = await this.$axios.get("/sliders")

        var data = {
            contact: {
                businessEmail: '',
                businessTel: '',
                businessName: '',
                projectEmail: '',
                executiveEmail: '',
                address: ''
            },
            meta: {
                logo: '',
                icon: '',
                title: '',
                description: ''
            }
        };

        setting.data.forEach(el => {
            switch (el.setting) {
                case 'contact.business.email':
                    data.contact.businessEmail = el.detail
                    break;
                case 'contact.business.tel':
                    data.contact.businessTel = el.detail
                    break;
                case 'contact.business.name':
                    data.contact.businessName = el.detail
                    break;
                case 'contact.project.email':
                    data.contact.projectEmail = el.detail
                    break;
                case 'contact.executive.email':
                    data.contact.executiveEmail = el.detail
                    break;
                case 'contact.address':
                    data.contact.address = el.detail
                    break;
                case 'logo':
                    data.meta.logo = el.detail_image.url
                    break;
                case 'icon':
                    data.meta.icon = el.detail_image.url
                    break;
                case 'meta.title':
                    data.meta.title = el.detail
                    break;
                case 'meta.description':
                    data.meta.description = el.detail
                    break;
                default:
                    break;
            }
        });


        commit("fetchSetting", data)
        commit("fetchSlider", sliders.data)
    },
    async fetchSettingWork({ commit }) {
        var setting = await this.$axios.$get('/setting'),
            works = await this.$axios.get("/works"),
            categories = await this.$axios.get("/work-categories"),
            serchTag = await this.$axios.get("/serch-tags")

        var data = {
            contact: {
                businessEmail: '',
                businessTel: '',
                businessName: '',
                projectEmail: '',
                executiveEmail: '',
                address: ''
            },
            meta: {
                logo: '',
                icon: '',
                title: '',
                description: ''
            }
        };

        setting.data.forEach(el => {
            switch (el.setting) {
                case 'contact.business.email':
                    data.contact.businessEmail = el.detail
                    break;
                case 'contact.business.tel':
                    data.contact.businessTel = el.detail
                    break;
                case 'contact.business.name':
                    data.contact.businessName = el.detail
                    break;
                case 'contact.project.email':
                    data.contact.projectEmail = el.detail
                    break;
                case 'contact.executive.email':
                    data.contact.executiveEmail = el.detail
                    break;
                case 'contact.address':
                    data.contact.address = el.detail
                    break;
                case 'logo':
                    data.meta.logo = el.detail_image.url
                    break;
                case 'icon':
                    data.meta.icon = el.detail_image.url
                    break;
                case 'meta.title':
                    data.meta.title = el.detail
                    break;
                case 'meta.description':
                    data.meta.description = el.detail
                    break;
                default:
                    break;
            }
        });

        commit("fetchSetting", data)
        commit("fetchWorks", works.data)
        commit("fetchCategories", categories.data)
        commit("fetchSerchTag", serchTag.data)
    },

    async fetchSetting({ commit }) {
        var setting = await this.$axios.$get('/setting'),
            sliders = await this.$axios.get("/sliders"),
            works = await this.$axios.get("/works"),
            categories = await this.$axios.get("/work-categories"),
            serchTag = await this.$axios.get("/serch-tags"),
            blogs = await this.$axios.get("/growup-blogs"),
            growupcategories = await this.$axios.get("/growup-categories"),
            teams = await this.$axios.get("/ourteams"),
            clients = await this.$axios.get("/ourclients");


        var data = {
            contact: {
                businessEmail: '',
                businessTel: '',
                businessName: '',
                projectEmail: '',
                executiveEmail: '',
                address: ''
            },
            meta: {
                logo: '',
                icon: '',
                title: '',
                description: ''
            }
        };

        setting.data.forEach(el => {
            switch (el.setting) {
                case 'contact.business.email':
                    data.contact.businessEmail = el.detail
                    break;
                case 'contact.business.tel':
                    data.contact.businessTel = el.detail
                    break;
                case 'contact.business.name':
                    data.contact.businessName = el.detail
                    break;
                case 'contact.project.email':
                    data.contact.projectEmail = el.detail
                    break;
                case 'contact.executive.email':
                    data.contact.executiveEmail = el.detail
                    break;
                case 'contact.address':
                    data.contact.address = el.detail
                    break;
                case 'logo':
                    data.meta.logo = el.detail_image.url
                    break;
                case 'icon':
                    data.meta.icon = el.detail_image.url
                    break;
                case 'meta.title':
                    data.meta.title = el.detail
                    break;
                case 'meta.description':
                    data.meta.description = el.detail
                    break;
                default:
                    break;
            }
        });

        commit("fetchSetting", data)
        commit("fetchSlider", sliders.data)
        commit("fetchWorks", works.data)
        commit("fetchCategories", categories.data)
        commit("fetchSerchTag", serchTag.data)
        commit("fetchBlogs", blogs.data)
        commit("fetchGrowupcategories", growupcategories.data)
        commit("fetchTeams", teams.data)
        commit("fetchClients", clients.data)


    }
}