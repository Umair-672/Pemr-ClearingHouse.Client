import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface DropdownOption {
  [key: string]: any;
}

export interface DropdownConfig {
  displayProperty: string;
  valueProperty: string;
  placeholder?: string;
  searchPlaceholder?: string;
  noResultsText?: string;
  icon?: string;
  maxHeight?: string;
}

@Component({
  selector: 'app-searchable-dropdown',
  templateUrl: './searchable-dropdown.component.html',
  styleUrls: ['./searchable-dropdown.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],

})
export class SearchableDropdownComponent implements ControlValueAccessor, OnInit, OnChanges {
  @Input() options: DropdownOption[] = [];
  @Input() config: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select an option...',
    searchPlaceholder: 'Search options...',
    noResultsText: 'No options found',
    icon: 'bi-list',
    maxHeight: '200px'
  };
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() customFilter?: (option: DropdownOption, searchTerm: string) => boolean;

  @Output() selectionChange = new EventEmitter<DropdownOption | null>();

  filteredOptions: DropdownOption[] = [];
  searchTerm: string = '';
  isDropdownOpen: boolean = false;
  selectedOption: DropdownOption | null = null;
  displayText: string = '';

  // ControlValueAccessor implementation
  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngOnInit(): void {
    this.initializeOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options']) {
      this.initializeOptions();
    }
  }

  private initializeOptions(): void {
    this.filteredOptions = [...this.options];
  }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      const option = this.options.find(opt => opt[this.config.valueProperty] === value);
      if (option) {
        this.selectedOption = option;
        this.displayText = option[this.config.displayProperty];
        this.searchTerm = this.displayText;
      }
    } else {
      this.selectedOption = null;
      this.displayText = '';
      this.searchTerm = '';
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Component methods
  filterOptions(): void {
    if (!this.searchTerm.trim()) {
      this.filteredOptions = [...this.options];
    } else {
      if (this.customFilter) {
        this.filteredOptions = this.options.filter(option =>
          this.customFilter!(option, this.searchTerm)
        );
      } else {
        this.filteredOptions = this.options.filter(option =>
          option[this.config.displayProperty]
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        );
      }
    }
  }

  selectOption(option: DropdownOption): void {
    this.selectedOption = option;
    this.displayText = option[this.config.displayProperty];
    this.searchTerm = this.displayText;
    this.isDropdownOpen = false;

    const value = option[this.config.valueProperty];
    this.onChange(value);
    this.onTouched();
    this.selectionChange.emit(option);
  }

  clearSelection(): void {
    this.selectedOption = null;
    this.displayText = '';
    this.searchTerm = '';
    this.filteredOptions = [...this.options];
    this.onChange(null);
    this.onTouched();
    this.selectionChange.emit(null);
  }

  toggleDropdown(): void {
    if (this.disabled) return;

    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) {
      this.searchTerm = '';
      this.filteredOptions = [...this.options];
    } else {
      // Restore display text if no selection was made
      if (this.selectedOption) {
        this.searchTerm = this.displayText;
      } else {
        this.searchTerm = '';
      }
    }
  }

  onSearchInput(): void {
    this.filterOptions();
    this.isDropdownOpen = true;
  }

  onFocus(): void {
    if (!this.disabled) {
      this.toggleDropdown();
    }
  }

  onBlur(): void {
    setTimeout(() => {
      this.isDropdownOpen = false;
      if (this.selectedOption) {
        this.searchTerm = this.displayText;
      } else {
        this.searchTerm = '';
      }
      this.onTouched();
    }, 200);
  }

  isOptionSelected(option: DropdownOption): boolean {
    return !!(this.selectedOption &&
           this.selectedOption[this.config.valueProperty] === option[this.config.valueProperty]);
  }
}
