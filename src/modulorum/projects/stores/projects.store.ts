import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { Project } from "../interfaces/project.interface";
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from "@vueuse/core";



export const useProjectsStore = defineStore('projects', () => {

    const projects = ref(useLocalStorage<Project[]>('projects', [] ));

    const addereProject = (nomen: string) => {
        if (nomen.length === 0) return;
        projects.value.push({
            id: uuidv4(),
            nomen: nomen,
            chores: [],
        });
    }

    const addereChoreAdProject = (projectId: string, choreNomen: string) => {
        if (choreNomen.trim().length === 0) return;
        const project = projects.value.find(p => p.id === projectId);
        if(!project) return;
        project.chores.push({
            id: uuidv4(),
            nomen: choreNomen,
        });
    }

    return {
        projects,
        projectList: computed(() => [...projects.value]),
        addereProject,
        nonProject: computed(() => projects.value.length === 0),
        addereChoreAdProject,
    }
});