import { shallowMount } from '@vue/test-utils';
import Project from '../src/components/Project.vue';

describe('Project.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Project, {
      data() {
        return {
          projects: [
            {
              logo: 'rpsLogo',
              title: 'Rock Paper Scissors',
              description: 'A rock paper scissors game built whit vanilla javascript.',
              subdescription: 'This project was built to practice vanilla javascript. It is a simple rock paper scissors game that allows users to play against the computer. The app is fully responsive and can be viewed on any device.',
              stack: ['HTML', 'CSS', 'JavaScript'],
              image: 'rpsImage',
              site: 'https://rock-paper-scissors-umber-theta.vercel.app'
            },
            {
              logo: 'todoLogo',
              title: 'To Do List',
              description: 'A simple to-do list app built with Vue.js and Tailwind CSS.',
              subdescription: 'This project was built to practice Vue.js and Tailwind CSS. It is a simple to-do list app that allows users to add, edit, and delete tasks. The app is fully responsive and can be viewed on any device.',
              stack: ['Vue.js','Vuetify', 'Tailwind CSS', 'JavaScript', 'Docker'],
              image: 'toDoListImage',
              site: 'https://vue-to-do-list-ochre.vercel.app/'
            },
            {
              logo: 'kanbanLogo',
              title: 'Kanban Board',
              description: 'A simple kanban board app built with react.js and chakra-ui.',
              subdescription: 'This project was built to practice react.js and chakra-ui. It is a simple kanban board app that allows users to add, edit, and delete tasks. The app is fully responsive and can be viewed on any device.',
              stack: ['React.js', 'Typescript', 'Node.js', 'Chakra-ui', 'Vite'],
              image: 'kanbanBoardImage',
              site: 'https://react-kanban-board-chi.vercel.app'
            }
          ],
          currentIndex: 0,
          timer: null,
          transitionName: 'slide-fade-left'
        };
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('renders project title correctly', () => {
    expect(wrapper.find('h1').text()).toBe('My Projects');
  });

  it('renders current project title correctly', () => {
    expect(wrapper.find('.text-3xl').text()).toBe('Rock Paper Scissors');
  });

  it('renders current project description correctly', () => {
    expect(wrapper.find('.text-lg').text()).toBe('A rock paper scissors game built whit vanilla javascript.');
  });

  it('applies correct class for kanbanLogo', async () => {
    await wrapper.setData({ currentIndex: 2 });
    expect(wrapper.find('img').classes()).toContain('h-20');
    expect(wrapper.find('img').classes()).toContain('scale-[1.2]');
  });

  it('applies correct class for non-kanbanLogo', async () => {
    await wrapper.setData({ currentIndex: 0 });
    expect(wrapper.find('img').classes()).toContain('h-20');
    expect(wrapper.find('img').classes()).not.toContain('scale-[1.2]');
  });

  it('changes project on nextProject method call', async () => {
    await wrapper.vm.nextProject();
    expect(wrapper.vm.currentIndex).toBe(1);
    expect(wrapper.find('.text-3xl').text()).toBe('To Do List');
  });

  it('changes project on prevProject method call', async () => {
    await wrapper.vm.prevProject();
    expect(wrapper.vm.currentIndex).toBe(2);
    expect(wrapper.find('.text-3xl').text()).toBe('Kanban Board');
  });
});
