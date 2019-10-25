import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShortifyService } from '../services/shortify-backend/shortify.service';
import { VisitDetails, CodeDetails } from '../shortify-ds';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private visitDetail: VisitDetails[];

  constructor(private shortify: ShortifyService,
              private activatedRouter: ActivatedRoute,
     ) { }

  ngOnInit() {
    const self = this;
    const code = self.activatedRouter.snapshot.paramMap.get('code');
    self.shortify.getCodeVisitDetails(code).subscribe((response) => {
      if (response.success) {
        self.visitDetail = response.data;
        console.log(response.data);
      } else {
        console.log('[detail_component_error]: error fetching details => ' + response.err);
      }
    });
  }
}
