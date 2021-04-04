import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'lib-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit, AfterViewInit {
  @Input() headerName: any[] | any;
  @Input() dataSource: any[] | any;
  @Input() options: any[] | any;
  @ViewChild(MatSort) sort: MatSort | any;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  searchKey: string | any;
  filterChecker: any;
  appliedFilters: any = {};
  data: MatTableDataSource<any> | any;

  ngAfterViewInit(): void {
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
  }

  constructor() {

  }

  ngOnInit(): void {
    this.addData();
  }


  get fields(): any {
    return this.headerName.map((conf: any) => conf.field);
  }

  addData(): void {
    this.data = new MatTableDataSource<any>(this.dataSource);
    this.data.paginator = this.paginator;
  }

  checkEmpty(obj: any): any {
    return Object.keys(obj).length === 0;
  }

  resetToFiltered(): void {
    if (!this.checkEmpty(this.appliedFilters)) {
      for (const key in this.appliedFilters) {
        this.applyFilter(key, this.appliedFilters[key]);
      }
    } else {
      this.addData();
    }
  }

  search(): void {
    this.data.filterPredicate = (data: any) => {
      return this.searchPredicate(data);
    };
    if (this.searchKey !== '') {
      this.data.filter = this.searchKey;
    } else {
      this.resetToFiltered();
    }
  }

  applyFilter(field: any, value: any): void {
    value = value.trim();
    if (value === 'none') {
      delete this.appliedFilters[field];
      this.resetToFiltered();
    } else {
      this.appliedFilters[field] = value;
    }
    this.data.filterPredicate = (data: any) => {
      return this.filterPredicate(data);
    };
    this.data.filter = value;
  }

  searchPredicate(data: any): boolean {
    let found = false;
    for (let i = 0; i < this.headerName.length; i++) {
      if (this.headerName[i].searchable) {
        found = found || (new RegExp(this.searchKey.toLowerCase())).test(data[this.headerName[i].field].toLowerCase());
      }
    }
    return this.filterPredicate(data) && found;
  }

  filterPredicate(data: any): boolean {
    let allApplied = true;
    for (const key in this.appliedFilters) {
      allApplied = allApplied && data[key] === this.appliedFilters[key];
    }
    return allApplied;
  }
    hideShowFilter(): void {
    this.filterChecker = !this.filterChecker;
    localStorage.setItem('filterChecker', JSON.stringify(this.filterChecker));
  }

  filterSet(): void {
    if (localStorage.getItem('filterChecker')) {
      this.filterChecker = localStorage.getItem('filterChecker');
      if (this.filterChecker === 'false') {
        this.filterChecker = false;
      }
    } else {
      this.filterChecker = true;
    }
  }
}
