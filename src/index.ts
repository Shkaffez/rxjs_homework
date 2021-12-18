import { from, defer} from 'rxjs';
import axios from 'axios';
import { map } from 'rxjs/operators'


const observer = {  
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
};

const githubApi$ = defer(() => 
    axios.get(`https://api.github.com/search/repositories?q=javascript&per_page=1`)     
  ).pipe(
    map((response) => response.data.items)        
  );
  
githubApi$.subscribe(observer);


const gitlabApi$ = from(
  axios.get(`https://gitlab.com/api/v4/projects?search=typescript&per_page=3`)     
).pipe(
  map((response) => response.data)    
);

gitlabApi$.subscribe(observer);