<template>
  <div :id="id" class="muuri-grid">
    <slot></slot>
  </div>
</template>

<script>
  import Muuri from 'muuri'

  var self = null

  export default {
    name: 'muuri-grid',
    data () {
      return {
        grid: null
      }
    },
    props: {
      id: {
        type: String,
        default: 'grid'
      },
      options: {
        type: Object,
        default () {
          return {
            items: '.item',
            dragEnabled: true,
          }
        }
      },
    },
    watch: {
      options: function (oldOptions, newOptions) {
        Object.keys(newOptions).forEach(function(key) {
          if(this.grid._settings[key] != null) this.grid._settings = newOptions[key];
        });
      }
    },
    created () {
      self = this
    },
    mounted () {
      this.createGrid()
      this.eventListening()
    },
    methods: {
      createGrid () {
        this.grid = new Muuri('#' + this.id, this.options)
        self.$emit('grid-created', this.grid)
      },
      eventListening () {
        this.grid.on('synchronize', function () {
          self.$emit('synchronize')
        })
        this.grid.on('layoutStart', function (items) {
          self.$emit('layout-start', items)
        })
        this.grid.on('layoutEnd', function (items) {
          self.$emit('layout-end', items)
        })
        this.grid.on('add', function (items) {
          self.$emit('add', items)
        })
        this.grid.on('remove', function (indices) {
          self.$emit('remove', indices)
        })
        this.grid.on('showStart', function (items) {
          self.$emit('show-start', items)
        })
        this.grid.on('showEnd', function (items) {
          self.$emit('show-end', items)
        })
        this.grid.on('hideStart', function (items) {
          self.$emit('hide-start', items)
        })
        this.grid.on('hideEnd', function (items) {
          self.$emit('hide-layout-end', items)
        })
        this.grid.on('filter', function (shownItems, hiddenItems) {
          self.$emit('filter', shownItems, hiddenItems)
        })
        this.grid.on('sort', function (currentOrder, previousOrder) {
          self.$emit('sort', currentOrder, previousOrder)
        })
        this.grid.on('move', function (data) {
          self.$emit('move', data)
        })
        this.grid.on('send', function (data) {
          self.$emit('send', data)
        })
        this.grid.on('beforeSend', function (data) {
          self.$emit('before-send', data)
        })
        this.grid.on('receive', function (data) {
          self.$emit('receive', data)
        })
        this.grid.on('beforeReceive', function (data) {
          self.$emit('before-receive', data)
        }),
        this.grid.on('dragInit', function (item, event) {
          self.$emit('drag-init', item, event)
        }),
        this.grid.on('dragStart', function (item, event) {
          self.$emit('drag-start', item, event)
        })
        this.grid.on('dragMove', function (item, event) {
          self.$emit('drag-move', item, event)
        })
        this.grid.on('dragScroll', function (item, event) {
          self.$emit('drag-scroll', item, event)
        })
        this.grid.on('dragEnd', function (item, event) {
          self.$emit('drag-end', item, event)
        })
        this.grid.on('dragReleaseStart', function (item) {
          self.$emit('drag-release-start', item)
        })
        this.grid.on('dragReleaseEnd', function (item) {
          self.$emit('drag-release-end', item)
        })
        this.grid.on('destroy', function () {
          self.$emit('destroy')
        })
      }
    }
  }
</script>

<style scoped>
  .grid {
    position: relative;
  }
  .item {
    display: block;
    position: absolute;
    width: 100px;
    height: 100px;
    margin: 5px;
    z-index: 1;
    background: #000;
    color: #fff;
  }
  .item.muuri-dragging {
    z-index: 3;
  }
  .item.muuri-releasing {
    z-index: 2;
  }
  .item.muuri-hidden {
    z-index: 0;
  }
  .item-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
