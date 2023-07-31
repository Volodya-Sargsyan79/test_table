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
        { title: 'Column 1', width: 100 },
        { title: 'Column 2', width: 100 },
        { title: 'Column 1', width: 100 },
        { title: 'Column 2', width: 100 },
        { title: 'Column 1', width: 100 },
        { title: 'Column 2', width: 100 },
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
    },
    handleMouseMove(event) {
      if (this.isResizing) {
        const offsetX = event.clientX - this.initialMouseX;
        const newWidth = this.initialColumnWidth + offsetX;
        if (newWidth > 0) {
          this.columns[this.resizingColumnIndex].width = newWidth;
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
  * {
      box-sizing: border-box;
  }

  .resizable-table {
    table-layout: fixed;
    border-collapse: collapse;
    width: 100%;
    min-width: 100%;
  }

  .resizable-table th, .resizable-table td {
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: clip;
    padding: 0 10px;
  }

  .resize-handle {
    position: absolute;
    top: 0;
    right: 0;
    border-right: solid 1px #ccc;
    width: 5%;
    height: 100%;
    cursor: col-resize;
  }

  .resize-handle:hover{
    border-right: solid 1px black;
  } 
</style>