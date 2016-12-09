package ninja.harmless.tethys.collection;

import java.util.*;

/**
 * @author bnjm@harmless.ninja - 12/9/16.
 */
public class ImmutableList<T> implements List<T> {

    private final List<T> list;

    public ImmutableList(List<T> list) {
        if(list == null) {
            throw new IllegalArgumentException("Constructor parameter cannot be null!");
        }
        this.list = list;
    }

    @Override
    public int size() {
        return list.size();
    }

    @Override
    public boolean isEmpty() {
        return list.isEmpty();
    }

    @Override
    public boolean contains(Object o) {
        return list.contains(o);
    }

    @Override
    public Iterator<T> iterator() {
        return list.iterator();
    }

    @Override
    public Object[] toArray() {
        return list.toArray();
    }

    @Override
    public boolean add(Object o) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public boolean remove(Object o) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public boolean addAll(Collection c) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public boolean addAll(int index, Collection c) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public void clear() {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public T get(int index) {
        return list.get(index);
    }

    @Override
    public T set(int index, Object element) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public void add(int index, Object element) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public T remove(int index) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public int indexOf(Object o) {
        return list.indexOf(o);
    }

    @Override
    public int lastIndexOf(Object o) {
        return list.lastIndexOf(o);
    }

    @Override
    public ListIterator<T> listIterator() {
        return list.listIterator();
    }

    @Override
    public ListIterator<T> listIterator(int index) {
        return list.listIterator(index);
    }

    @Override
    public List<T> subList(int fromIndex, int toIndex) {
        return list.subList(fromIndex, toIndex);
    }

    @Override
    public boolean retainAll(Collection c) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public boolean removeAll(Collection c) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public boolean containsAll(Collection c) {
        throw new UnsupportedOperationException("ImmutableList is immutable");
    }

    @Override
    public Object[] toArray(Object[] a) {
        return list.toArray(a);
    }
}
