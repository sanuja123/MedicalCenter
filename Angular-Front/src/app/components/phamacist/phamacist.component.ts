import { Component, OnInit } from '@angular/core';
import{PhamacistService} from '../../service/phamacist.service';

import{MatTableDataSource, MatDialog, MatDialogConfig} from '@angular/material';
import {Router} from '@angular/router';
import {Phamacist} from '../../../app/phamacist.model';
import {} from "@angular/material";
import{AddmedicComponent} from './addmedi/addmedic/addmedic.component';

@Component({
  selector: 'app-phamacist',
  templateUrl: './phamacist.component.html',
  styleUrls: ['./phamacist.component.css']
})
export class PhamacistComponent implements OnInit {

  selected = 'option2';
  numFlags='0';

  phamacist:Phamacist[];
  displayedColumns:string[]=['name','weight','quantity','action'];
  constructor(private phamacistservice:PhamacistService,
    private router:Router,
     private dialog :MatDialog) { }

  ngOnInit() {
    this.fetchPhamacist();
  }
  fetchPhamacist(){
    this.phamacistservice
    .getPhamacist()
    .subscribe((data:Phamacist[])=>{
      this.phamacist = data;
      console.log('Data requested......');
      console.log(this.phamacist);

      });

  }

  onCreate()
  {
    const dilogConfig=new MatDialogConfig();
    dilogConfig.disableClose=true;
    dilogConfig.autoFocus=true;
    dilogConfig.width="60%";
     this.dialog.open(AddmedicComponent);
  }

}
