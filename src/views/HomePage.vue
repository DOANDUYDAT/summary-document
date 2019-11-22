<template>
  <v-container>
    <v-row align="start" justify="center">
      <v-col>
        <v-card>
          <v-card-title>Văn bản</v-card-title>
          <v-card-text>
            <v-textarea
              outlined
              background-color="success"
              rows="15"
              placeholder="Nhập văn bản cần tóm tắt"
              v-model="dataInput"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue" @click="submit">Tóm tắt</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-card>
          <v-card-title>Văn bản tóm tắt</v-card-title>
          <v-card-text>
            <v-textarea
              outlined
              background-color="success"
              rows="15"
              readonly
              v-model="dataOutput"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue">Tải file về</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { docService } from '@/_api'
export default {
  data() {
    return {
      dataInput: `Called after a data change causes the virtual DOM to be re-rendered and patched.

The component’s DOM will have been updated when this hook is called, so you can perform DOM-dependent operations here. However, in most cases you should avoid changing state inside the hook. To react to state changes, it’s usually better to use a computed property or watcher instead.
 DOM will have been updated when this hook is called, so you can perform DOM-dependent operations here. However, in most cases you should avoid changing state inside the hook. To react to state changes, it’s usually better to use a computed property or watcher instead.
Note that updated does not guarantee that all child components have also been re-
Note that updated does not guarantee that all child components have also been re-rendered. If you want to wait until the entire view has been re-rendered, you can use vm.$nextTick inside of updated:`
    };
  },
  computed: {
    dataOutput() {
      return this.dataInput.substr(0, 100);
    }
  },
  methods: {
    async submit() {

    }
  }
};
</script>