import { Component, OnInit } from '@angular/core';

// Goi Thu Vien Param Map
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  alias:any;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.alias = params.get('id');
    });
  }

}
