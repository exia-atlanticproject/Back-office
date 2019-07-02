<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <v-app>
        <v-toolbar
             fixed
             clipped-left
             app>
            <v-toolbar-title>Back Office Atlantis</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn
                        v-for="item in menu"
                        :key="item.icon"
                        :to="item.link"
                        flat
                >{{ item.title }}</v-btn>
            </v-toolbar-items>
            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                <v-list>
                    <v-list-tile v-for="item in menu" :key="item.icon">
                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-menu>
        </v-toolbar>
        <v-navigation-drawer
                stateless
                v-model="drawer"
                app
                left
                clipped
        >
            <v-list>
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile>

                <v-list-group
                        prepend-icon="account_circle"
                        value="true"
                >
                    <template v-slot:activator>
                        <v-list-tile>
                            <v-list-tile-title>Users</v-list-tile-title>
                        </v-list-tile>
                    </template>
                    <v-list-group
                            no-action
                            sub-group
                            value="true"
                    >
                        <template v-slot:activator>
                            <v-list-tile>
                                <v-list-tile-title>Admin</v-list-tile-title>
                            </v-list-tile>
                        </template>

                        <v-list-tile
                                v-for="(admin, i) in admins"
                                :key="i"
                                @click="$router.push(admin[2])"
                        >
                            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                            <v-list-tile-action>
                                <v-icon v-text="admin[1]"></v-icon>
                            </v-list-tile-action>
                        </v-list-tile>
                    </v-list-group>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <v-content style="padding: 15px 0px 32px 150px;">
            <v-container fluid>
                    <slot></slot>
            </v-container>
        </v-content>
        <v-footer color="blue" app>
            <v-spacer></v-spacer>
            <span class="white--text"></span>
        </v-footer>
    </v-app>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    menu: [],
    admins: [
      ['Management', 'people_outline', 'user'],
      ['Devices', 'devices_other', 'device'],
      ['Connect', 'device_hub', 'connect'],
    ]
  }),
};
</script>
