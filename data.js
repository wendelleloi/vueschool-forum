data = {
  threads: {
    t1: {
      '.key': 't1',
      title: 'my first thread',
      publishedAt: '',
      posts: {
        p1: 'p1'
      },
      userId: 'u1'
    }
  },
  posts: {
    p1: {
      '.key': 'p1',
      publishedAt: '',
      userId: '',
      text: 'hi there',
      threadId: 't1'
    }
  },
  users: {
    u1: {
      name: 'Alice',
      '.key': 'u1',
      threads: {
        't1'
      },
      posts: {
        'p1'
      }
    }
  },
  foruns: {
    f1: {
      '.key': 'f1',
      name: 'Fishing',
      description: '',
      category: 'c1',
      threads: {
        t1: 't1'
      }
    }
  },
  categories: {
    c1: {
      '.key': 'c1',
      name: 'Discurssions',
      foruns: {
        f1: 'f1'
      }
    }
  }
}
