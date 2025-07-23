# Searchable Dropdown Component

A generic, reusable Angular component that provides searchable dropdown functionality with Bootstrap styling. This component can be used across different features and APIs in the application.

## Features

- ✅ **Real-time search filtering** - Filter options as you type
- ✅ **Reactive Forms integration** - Full support for Angular reactive forms
- ✅ **Configurable display** - Customize display and value properties
- ✅ **Bootstrap styling** - Consistent with application design system
- ✅ **Accessibility** - ARIA attributes and keyboard navigation
- ✅ **Custom filtering** - Support for custom filter functions
- ✅ **Clear selection** - Easy way to clear selected values
- ✅ **Loading states** - Handle empty states gracefully

## Usage

### Basic Implementation

```typescript
// In your component
import { DropdownConfig, DropdownOption } from '../../../shared/components/searchable-dropdown/searchable-dropdown.component';

export class YourComponent {
  items: YourDataType[] = [];
  
  dropdownConfig: DropdownConfig = {
    displayProperty: 'name',
    valueProperty: 'id',
    placeholder: 'Select an option...',
    searchPlaceholder: 'Search options...',
    noResultsText: 'No options found',
    icon: 'bi-list',
    maxHeight: '200px'
  };

  onSelectionChange(selectedOption: DropdownOption | null): void {
    if (selectedOption) {
      const selectedItem = selectedOption as YourDataType;
      console.log('Selected:', selectedItem.name);
    }
  }
}
```

```html
<!-- In your template -->
<div class="form-group mb-3">
  <label for="yourField" class="fw-semibold mb-1">Your Field Label</label>
  <app-searchable-dropdown
    [options]="items"
    [config]="dropdownConfig"
    [disabled]="false"
    [required]="true"
    formControlName="yourFieldId"
    (selectionChange)="onSelectionChange($event)"
    [ngClass]="{'is-invalid': yourForm.get('yourFieldId')?.invalid && yourForm.get('yourFieldId')?.touched}"
  ></app-searchable-dropdown>
  
  <div *ngIf="yourForm.get('yourFieldId')?.invalid && yourForm.get('yourFieldId')?.touched" class="invalid-feedback d-block">
    This field is required.
  </div>
</div>
```

### Module Setup

```typescript
// In your feature module
import { SearchableDropdownStandaloneComponent } from '../../shared/components/searchable-dropdown/searchable-dropdown.standalone';

@NgModule({
  imports: [
    // ... other imports
    SearchableDropdownStandaloneComponent
  ]
})
export class YourFeatureModule { }
```

## Configuration Options

### DropdownConfig Interface

```typescript
interface DropdownConfig {
  displayProperty: string;      // Property to display in dropdown (e.g., 'name')
  valueProperty: string;        // Property to use as value (e.g., 'id')
  placeholder?: string;         // Placeholder when no selection
  searchPlaceholder?: string;   // Placeholder for search input
  noResultsText?: string;       // Text when no results found
  icon?: string;               // Bootstrap icon class (e.g., 'bi-list')
  maxHeight?: string;          // Max height of dropdown (e.g., '200px')
}
```

### Component Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `options` | `DropdownOption[]` | `[]` | Array of options to display |
| `config` | `DropdownConfig` | See defaults | Configuration object |
| `disabled` | `boolean` | `false` | Whether dropdown is disabled |
| `required` | `boolean` | `false` | Whether field is required |
| `customFilter` | `Function` | `undefined` | Custom filter function |

### Component Outputs

| Output | Type | Description |
|--------|------|-------------|
| `selectionChange` | `EventEmitter<DropdownOption \| null>` | Emitted when selection changes |

## Advanced Usage

### Custom Filter Function

```typescript
// Custom filter for more complex searching
customFilter = (option: DropdownOption, searchTerm: string): boolean => {
  const item = option as YourDataType;
  return item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
         item.code.toLowerCase().includes(searchTerm.toLowerCase());
};
```

```html
<app-searchable-dropdown
  [options]="items"
  [config]="dropdownConfig"
  [customFilter]="customFilter"
  formControlName="yourFieldId"
></app-searchable-dropdown>
```

### Different Data Types

The component works with any object type. Just configure the `displayProperty` and `valueProperty`:

```typescript
// For users
userConfig: DropdownConfig = {
  displayProperty: 'fullName',
  valueProperty: 'userId',
  icon: 'bi-person'
};

// For files
fileConfig: DropdownConfig = {
  displayProperty: 'fileName',
  valueProperty: 'fileId',
  icon: 'bi-file-earmark'
};

// For organizations
orgConfig: DropdownConfig = {
  displayProperty: 'organizationName',
  valueProperty: 'orgId',
  icon: 'bi-building'
};
```

## Real-World Examples

### 1. Inbound Claim Files (Current Implementation)

```typescript
claimFileDropdownConfig: DropdownConfig = {
  displayProperty: 'name',
  valueProperty: 'id',
  placeholder: 'Select inbound claim file...',
  searchPlaceholder: 'Search and select inbound claim file...',
  noResultsText: 'No claim files found',
  icon: 'bi-file-earmark-text',
  maxHeight: '200px'
};
```

### 2. User Selection

```typescript
userDropdownConfig: DropdownConfig = {
  displayProperty: 'fullName',
  valueProperty: 'id',
  placeholder: 'Select a user...',
  searchPlaceholder: 'Search users...',
  noResultsText: 'No users found',
  icon: 'bi-person',
  maxHeight: '250px'
};
```

### 3. Organization Selection

```typescript
organizationDropdownConfig: DropdownConfig = {
  displayProperty: 'name',
  valueProperty: 'id',
  placeholder: 'Select organization...',
  searchPlaceholder: 'Search organizations...',
  noResultsText: 'No organizations found',
  icon: 'bi-building',
  maxHeight: '300px'
};
```

## Best Practices

1. **Consistent Configuration**: Use similar configurations across your application for consistency
2. **Appropriate Icons**: Choose Bootstrap icons that match the data type
3. **Reasonable Max Heights**: Keep dropdown heights reasonable (150px-300px)
4. **Clear Placeholders**: Use descriptive placeholder text
5. **Error Handling**: Always include form validation feedback
6. **Performance**: For large datasets, consider implementing server-side filtering

## Styling

The component uses Bootstrap classes and can be customized with additional CSS:

```scss
// Custom styling example
app-searchable-dropdown {
  .dropdown-menu {
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .dropdown-item:hover {
    background-color: #f8f9fa;
  }
}
```

## Accessibility

The component includes:
- ARIA attributes for screen readers
- Keyboard navigation support
- Focus management
- Proper labeling

## Browser Support

Compatible with all modern browsers that support Angular 20+ and Bootstrap 5.3+.
