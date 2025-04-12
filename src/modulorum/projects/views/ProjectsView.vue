<template>
  <div class="overflow-x-auto w-full">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Proyectos</th>
          <th>Tareas</th>
          <th>Avance</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(project, index) in projectStore.projectList" :key="project.id" class="hover:bg-base-300">
          <th>{{ index + 1 }}</th>
          <td>{{ project.nomen }}</td>
          <td>{{ project.chores.length }}</td>
          <progress class="progress progress-primary w-56" value="10" max="100"></progress>
        </tr>
      </tbody>
    </table>
  </div>

  <InputModal 
    :aperta="modalAperta"
    @claudere="modalAperta=false"
    @valorem="projectStore.addereProject"
    placeholder="Introduce el nombre del proyecto"
    titulus="Nuevo proyecto"
    subtitulus="Dale un nombre apropiado a tu proyecto"
  />

  <proprium-modal :aperta="propriumModalAperta">
    <template #header>
        <h1 class="text-3xl">Título del modal</h1>
    </template>

    <template #body>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto ab magni facilis odit sapiente temporibus molestias? Beatae, voluptate nulla, a quae, quia voluptatibus unde dolorum consequuntur itaque nesciunt dignissimos reiciendis?</p>
    </template>

    <template #footer>
        <div class="flex justify-end">
            <button @click="propriumModalAperta = false" class="btn">Close</button>
            <button @click="propriumModalAperta = false" class="btn btn-primary ml-4">Aceptar</button>
        </div>
    </template>

  </proprium-modal>

    <fab-button @click="modalAperta=true">
        <AddCircle />
    </fab-button>

    <fab-button @click="propriumModalAperta=true" positione="bottom-left">
        <ModalIcon />
    </fab-button>


</template>

<script lang="ts" setup>
import FabButton from '@/modulorum/commune/components/FabButton.vue';
import InputModal from '@/modulorum/commune/components/InputModal.vue';
import PropriumModal from '@/modulorum/commune/components/PropriumModal.vue';
import AddCircle from '@/modulorum/commune/icons/AddCircle.vue';
import ModalIcon from '@/modulorum/commune/icons/ModalIcon.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../stores/projects.store';

const modalAperta = ref(false);
const propriumModalAperta = ref(false);

const projectStore = useProjectsStore();

</script>
