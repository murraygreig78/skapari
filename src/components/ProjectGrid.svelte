<script>
  export let projects = [];
  export let categories = [];
  let selectedStatus = 'all';
  let selectedCategory = 'all';

  const statusOptions = [
    { id: 'all', label: 'All' },
    { id: 'Completed', label: 'Completed' },
    { id: 'Conceptual', label: 'Conceptual' }
  ];

  function setStatus(status) {
    selectedStatus = status;
  }
  function setCategory(cat) {
    selectedCategory = cat;
  }
</script>

<div class="container-fluid">
  <div class="row bg-dark">
    <div class="col-sm-11 m-auto">
      <ul class="subnav nav justify-content-end">
        {#each statusOptions as opt}
          <li class="nav-item">
            <a class="nav-link{selectedStatus === opt.id ? ' active' : ''}" href="javascript:void(0)" on:click={() => setStatus(opt.id)}>{opt.label}</a>
          </li>
        {/each}
        <li  class="nav-item"><span class="nav-link">|</span></li>
        <li class="nav-item">
          <a class="nav-link{selectedCategory === 'all' ? ' active' : ''}" href="javascript:void(0)" on:click={() => setCategory('all')}>All</a>
        </li>
        {#each categories as cat}
          <li class="nav-item">
            <a class="nav-link{selectedCategory === cat.id ? ' active' : ''}" href="javascript:void(0)" on:click={() => setCategory(cat.id)}>{cat.label}</a>
          </li>
        {/each}
      </ul>  
    </div>
  </div>
    
  
  

  {#each categories.filter(cat => selectedCategory === 'all' || cat.id === selectedCategory) as cat}
    <div id={cat.id} class="category-section mb-5">
      <div class="row">
        <div class="col-sm-8 m-auto heading">
          <h3 class="skapari-heading design-philisophy">{cat.label.toUpperCase()}<span>our work</span></h3>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-8 m-auto">
          
            {#each projects.filter(p => p.category && p.category.toLowerCase() === cat.id)
              .filter(p => selectedStatus === 'all' || (p.status && p.status.toLowerCase() === selectedStatus.toLowerCase())) as project}
                
                <a href={project.url} class="project-link">
                    <div class="row mb-4">
                        <div class="col-md-6 mb-4">
                            <img
                        src={project.images && project.images.length > 0 ? project.images[0] : project.img}
                        alt={project.name}
                        class="img-fluid project-thumb" />
                        </div>
                        <div class="col-md-6 mb-4"> 
                            <h4 class="mb-4">{project.name}</h4> 
                            <p class="small">{project.description}</p>
                        </div>
                    </div>
                </a>
            {/each}
          
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .project-link {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  .project-link img.project-thumb {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .project-link h4 {
    font-size: 1.2rem;
    margin: 0;
  }
  .subnav {
    margin-bottom: 2rem;
  }
  .subnav .nav-link {
    color: #fefefe;
    margin-left: 1rem;
    margin-right: 1rem;
    transition: color 0.2s;
    cursor: pointer;
  }
  .subnav .nav-link.active {
    color: #e0e0e0;
    text-decoration: underline;
  }
  .subnav .nav-link:hover {
    color: #e0e0e0;
  }
  .category-section {
    padding-top: 2rem;
  }
</style> 