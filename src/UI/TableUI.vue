<template>
    <div class="table-container">
    <table class="resizable-table">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index" :style="{ width: column.width + 'px' }">
            {{ column.title }}
            <div class="resize-handle" @mousedown="startResizing(index)"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>mail</td>
            <td>20</td>
        </tr>
        <tr>
            <td>mail</td>
            <td>20</td>
        </tr>
        <tr>
            <td>mail</td>
            <td>20</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: 'TableUI',
        data() {
    return {
      columns: [
        { title: 'Column 1', width: 150 },
        { title: 'Column 2', width: 200 },
        // Add more columns as needed
      ],
      isResizing: false,
      resizingColumnIndex: null,
      initialMouseX: 0,
      initialColumnWidth: 0,
    };
  },
  methods: {
    startResizing(index) {
      this.isResizing = true;
      this.resizingColumnIndex = index;
      this.initialMouseX = event.clientX;
      this.initialColumnWidth = this.columns[index].width;
      window.addEventListener('mousemove', this.handleMouseMove);
      window.addEventListener('mouseup', this.stopResizing);
      console.log(this.initialColumnWidth)
    },
    handleMouseMove(event) {
      if (this.isResizing) {
        const offsetX = event.clientX - this.initialMouseX;
        const newWidth = this.initialColumnWidth + offsetX;
        
        if (newWidth > 0) {
          this.columns[this.resizingColumnIndex].width = newWidth;
          console.log(this.columns[this.resizingColumnIndex].width)
        }
      }
    },
    stopResizing() {
      this.isResizing = false;
      this.resizingColumnIndex = null;
      this.initialMouseX = 0;
      this.initialColumnWidth = 0;
      window.removeEventListener('mousemove', this.handleMouseMove);
      window.removeEventListener('mouseup', this.stopResizing);
    },
  },
    }
</script>

<style>

.resizable-table th {
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-right: 1px solid blue;
}

.resize-handle {
  position: absolute;
  top: 0;
  right: 0;
  border-left: 1px solid black;
  height: 100%;
  cursor: col-resize;
}

td {
    display: none;;
}

.rresizable-table th:hover + table td{
   display: block;
}

</style>