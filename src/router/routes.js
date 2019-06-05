import Index from 'pages/Index.vue'
import education from 'src/pages/education.vue'
import skillSet from 'src/pages/skillSet.vue'
import workExperience from 'src/pages/workExperience.vue'
import projects from 'src/pages/projects.vue'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: Index },
      { path: 'education', component: education },
      { path: 'skill-set', component: skillSet },
      { path: 'work-experience', component: workExperience },
      { path: 'projects', component: projects }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
